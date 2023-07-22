import { Router } from 'express';
import Middlewares from '../middlewares/Category';
import CategoryController from './controller';
import AuthMiddleware from '../middlewares/Auth';

export default class CategoryRouter {
  private _router: Router;

  private _controller: CategoryController;

  constructor(router = Router(), controller = new CategoryController()) {
    this._router = router;
    this._controller = controller;

    this._router.get('/', this._controller.getAll);
    this._router.get('/:id', this._controller.getById);
    this._router.use(AuthMiddleware.Jwt);
    this._router.post('/', Middlewares.createValidation, this._controller.create);
    this._router.put('/:id', Middlewares.updateValidation, this._controller.update);
    this._router.delete('/:id', this._controller.delete);
  }

  get router() {
    return this._router;
  }
}