import { RequestHandler } from "express";
import { IUserCreateRequest, IUserUpdateRequest } from "../interfaces/IUser";
import { BadRequest } from "../utils/errors/BadRequest";
import Logger from "../utils/logger";
import UserService from "./service";

export default class UserController {
  private _service: UserService;

  constructor(service = new UserService()) {
    this._service = service;
  }

  public getAll: RequestHandler = async (_req, res, next) => {
    try {
      const allUsers = await this._service.getAll();

      res.status(200).json(allUsers);

      Logger.save("getAll() success");
    } catch (error) {
      Logger.save("getAll() fail");

      next(error);
    }
  };

  public getById: RequestHandler = async (req, res, next) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) return next(new BadRequest("invalid id"));

    try {
      const user = await this._service.getById(id);

      res.status(200).json(user);

      Logger.save("getById() success");
    } catch (error) {
      Logger.save("getById() fail");

      next(error);
    }
  };

  public create: RequestHandler = async (req, res, next) => {
    const { email, name, password, isAdmin } = req.body as IUserCreateRequest;

    try {
      const newUser = await this._service.create({
        email,
        name,
        password,
        isAdmin,
      });

      res.status(201).json(newUser);

      Logger.save("create() success");
    } catch (error) {
      Logger.save("create() fail");

      next(error);
    }
  };

  public update: RequestHandler = async (req, res, next) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) return next(new BadRequest("invalid id"));

    const { email, name, password, isAdmin } = req.body as IUserUpdateRequest;

    try {
      const updatedUser = await this._service.update(id, {
        email,
        name,
        password,
        isAdmin,
      });

      res.status(200).json(updatedUser);

      Logger.save("update() success");
    } catch (error) {
      Logger.save("update() fail");

      next(error);
    }
  };

  public delete: RequestHandler = async (req, res, next) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) return next(new BadRequest("invalid id"));

    try {
      await this._service.delete(id);

      res.status(204).end();

      Logger.save("delete() success");
    } catch (error) {
      Logger.save("delete() fail");

      next(error);
    }
  };

  public login: RequestHandler = async (req, res, next) => {
    const { email, password } = req.body;

    try {
      const token = await this._service.login(email, password);

      res.status(200).json(token);

      Logger.save("login() success");
    } catch (error) {
      Logger.save("login() fail");

      next(error);
    }
  };
}
