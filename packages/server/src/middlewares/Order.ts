import { RequestHandler } from "express";
import joi from "joi";
import { BadRequest } from "../utils/errors/BadRequest";
import { IOrderCreateRequest, IOrderUpdateRequest } from "../interfaces/IOrder";
import { Middleware } from "./Middleware";

export default class OrderMiddlewares extends Middleware {
  private static _createSchema = joi.object({
    userId: joi.number().required(),
    products: joi.array().items(joi.number()).required(),
    totalPrice: joi.number().required(),
  });

  private static _updateSchema = joi.object({
    userId: joi.number(),
    products: joi.array().items(joi.number()),
    totalPrice: joi.number(),
  });

  public static createValidation: RequestHandler = (req, _res, next) => {
    const { userId, products, totalPrice } = req.body as IOrderCreateRequest;
    const { error } = OrderMiddlewares._createSchema.validate({
      userId,
      products,
      totalPrice,
    });

    if (error) return next(new BadRequest(error.message));

    next();
  };

  public static updateValidation: RequestHandler = (req, _res, next) => {
    const { userId, products, totalPrice } = req.body as IOrderUpdateRequest;
    const { error } = OrderMiddlewares._updateSchema.validate({
      userId,
      products,
      totalPrice,
    });

    if (error) return next(new BadRequest(error.message));

    next();
  };
}