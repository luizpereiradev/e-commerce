import { RequestHandler } from "express";
import { BadRequest } from "../utils/errors/BadRequest";
import Logger from "../utils/logger";
import { IProductCreateRequest, IProductUpdateRequest } from "../interfaces/IProduct";
import ProductService from "./service";

export default class ProductController {
  private _service: ProductService;

  constructor(service = new ProductService()) {
    this._service = service;
  }

  public getAll: RequestHandler = async (_req, res, next) => {
    try {
      const allProduct = await this._service.getAll();

      res.status(200).json(allProduct);

      Logger.save("product getAll() success");
    } catch (error) {
      Logger.save("product getAll() fail");

      next(error);
    }
  };

  public getById: RequestHandler = async (req, res, next) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) return next(new BadRequest("invalid id"));

    try {
      const user = await this._service.getById(id);

      res.status(200).json(user);

      Logger.save("product getById() success");
    } catch (error) {
      Logger.save("product getById() fail");

      next(error);
    }
  };

  public create: RequestHandler = async (req, res, next) => {
    const { name, description, price, imageUrl, categories } = req.body as IProductCreateRequest;

    try {
      const newProduct = await this._service.create({
        name,
        description,
        price,
        imageUrl,
        categories
      });

      res.status(201).json(newProduct);

      Logger.save("product create() success");
    } catch (error) {
      Logger.save("product create() fail");

      next(error);
    }
  };

  public update: RequestHandler = async (req, res, next) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) return next(new BadRequest("invalid id"));

    const { name, description, price, imageUrl, categories } = req.body as IProductUpdateRequest;

    try {
      const updatedProduct = await this._service.update(id, {
        name,
        description,
        price,
        imageUrl,
        categories
      });

      res.status(200).json(updatedProduct);

      Logger.save("product update() success");
    } catch (error) {
      Logger.save("product update() fail");

      next(error);
    }
  };

  public delete: RequestHandler = async (req, res, next) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) return next(new BadRequest("invalid id"));

    try {
      await this._service.delete(id);

      res.status(204).end();

      Logger.save("product delete() success");
    } catch (error) {
      Logger.save("product delete() fail");

      next(error);
    }
  };
}
