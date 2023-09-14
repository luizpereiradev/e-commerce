import { RequestHandler } from "express";
import joi from "joi";
import { BadRequest } from "../utils/errors/BadRequest";
import { IUserCreateRequest, IUserLoginRequest, IUserUpdateRequest } from "../interfaces/IUser";
import { Middleware } from "./Middleware";

export default class UserMiddlewares extends Middleware {
  private static _createSchema = joi.object({
    email: joi.string().email().required(),
    name: joi.string().required(),
    password: joi.string().required(),
    isAdmin: joi.boolean(),
  });

  private static _updateSchema = joi.object({
    email: joi.string().email(),
    name: joi.string(),
    password: joi.string(),
    isAdmin: joi.boolean(),
  });

  private static _loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });

  public static createValidation: RequestHandler = (req, _res, next) => {
    const { email, name, password, isAdmin } = req.body as IUserCreateRequest;
    const { error } = UserMiddlewares._createSchema.validate({
      email,
      name,
      password,
      isAdmin,
    });

    if (error) return next(new BadRequest(error.message));

    next();
  };

  public static updateValidation: RequestHandler = (req, _res, next) => {
    const { email, name, password, isAdmin } = req.body as IUserUpdateRequest;
    const { error } = UserMiddlewares._updateSchema.validate({
        email,
        name,
        password,
        isAdmin,
    });

    if (error) return next(new BadRequest(error.message));

    next();
  };

  public static loginValidation: RequestHandler = (req, _res, next) => {
    const { email, password } = req.body as IUserLoginRequest;
    const { error } = UserMiddlewares._loginSchema.validate({
      email,
      password,
    });

    if (error) return next(new BadRequest(error.message));

    next();
  }
}
