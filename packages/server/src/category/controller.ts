import { RequestHandler } from "express";
import { BadRequest } from "../utils/errors/BadRequest";
import Logger from "../utils/logger";
import CategoryService from "./service";
import {
  ICategoryCreateRequest,
  ICategoryUpdateRequest,
} from "../interfaces/ICategory";

export default class CategoryController {
  private _service: CategoryService;

  constructor(service = new CategoryService()) {
    this._service = service;
  }

  public getAll: RequestHandler = async (_req, res, next) => {
    try {
      const AllCategory = await this._service.getAll();

      res.status(200).json(AllCategory);

      Logger.save("category getAll() success");
    } catch (error) {
      Logger.save("category getAll() fail");

      next(error);
    }
  };

  public getById: RequestHandler = async (req, res, next) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) return next(new BadRequest("invalid id"));

    try {
      const user = await this._service.getById(id);

      res.status(200).json(user);

      Logger.save("category getById() success");
    } catch (error) {
      Logger.save("category getById() fail");

      next(error);
    }
  };

  public create: RequestHandler = async (req, res, next) => {
    const { name, parentId } = req.body as ICategoryCreateRequest;

    try {
      const newCategory = await this._service.create({
        name,
        parentId,
      });

      res.status(201).json(newCategory);

      Logger.save("category create() success");
    } catch (error) {
      Logger.save("category create() fail");

      next(error);
    }
  };

  public update: RequestHandler = async (req, res, next) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) return next(new BadRequest("invalid id"));

    const { name, parentId } = req.body as ICategoryUpdateRequest;

    try {
      const updateCategory = await this._service.update(id, {
        name,
        parentId,
      });

      res.status(200).json(updateCategory);

      Logger.save("category update() success");
    } catch (error) {
      Logger.save("category update() fail");

      next(error);
    }
  };

  public delete: RequestHandler = async (req, res, next) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) return next(new BadRequest("invalid id"));

    try {
      await this._service.delete(id);

      res.status(204).end();

      Logger.save("category delete() success");
    } catch (error) {
      Logger.save("category delete() fail");

      next(error);
    }
  };
}
