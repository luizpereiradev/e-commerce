import { RequestHandler } from "express";
import joi from "joi";
import { BadRequest } from "../utils/errors/BadRequest";
import { ICategoryCreateRequest, ICategoryUpdateRequest } from "../interfaces/ICategory";
import { Middleware } from "./Middleware";

export default class CategoryMiddlewares extends Middleware {
  private static _createSchema = joi.object({
    name: joi.string().required(),
    parentId: joi.number(),
  });

  private static _updateSchema = joi.object({
    name: joi.string(),
    parentId: joi.number(),
  });

  public static createValidation: RequestHandler = (req, _res, next) => {
    const { name, parentId } = req.body as ICategoryCreateRequest;
    const { error } = CategoryMiddlewares._createSchema.validate({
      name,
      parentId,
    });

    if (error) return next(new BadRequest(error.message));

    next();
  };

  public static updateValidation: RequestHandler = (req, _res, next) => {
    const { name, parentId } = req.body as ICategoryUpdateRequest;
    const { error } = CategoryMiddlewares._updateSchema.validate({
      name,
      parentId,
    });

    if (error) return next(new BadRequest(error.message));

    next();
  };
}