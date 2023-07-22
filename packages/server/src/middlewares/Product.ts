import { RequestHandler } from "express";
import joi from "joi";
import { BadRequest } from "../utils/errors/BadRequest";
import { IProductCreateRequest, IProductUpdateRequest } from "../interfaces/IProduct";
import { Middleware } from "./Middleware";

export default class ProductMiddlewares extends Middleware {
  private static _createSchema = joi.object({
    name: joi.string().required(),
    description: joi.string().required(),
    price: joi.number().required(),
    imageUrl: joi.string().required(),
    categories: joi.array().items(joi.number()).required(),
  });

  private static _updateSchema = joi.object({
    name: joi.string(),
    description: joi.string(),
    price: joi.number(),
    imageUrl: joi.string(),
    categories: joi.array().items(joi.number()),
  });

  public static createValidation: RequestHandler = (req, _res, next) => {
    const { name, description, price, imageUrl, categories } = req.body as IProductCreateRequest;
    const { error } = ProductMiddlewares._createSchema.validate({
      name,
      description,
      price,
      imageUrl,
      categories,
    });

    if (error) return next(new BadRequest(error.message));

    next();
  };

  public static updateValidation: RequestHandler = (req, _res, next) => {
    const { name, description, price, imageUrl, categories } = req.body as IProductUpdateRequest;
    const { error } = ProductMiddlewares._updateSchema.validate({
      name,
      description,
      price,
      imageUrl,
      categories,
    });

    if (error) return next(new BadRequest(error.message));

    next();
  };
}