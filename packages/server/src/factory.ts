import { PrismaClient } from '@prisma/client';
import { Router } from 'express';
import UserController from './user/controller';
import UserRepository from './user/repository';
import UserRouter from './user/router';
import UserService from './user/service';
import CategoryRepository from './category/repository';
import CategoryService from './category/service';
import CategoryController from './category/controller';
import CategoryRouter from './category/router';
import ProductRepository from './product/repository';
import ProductService from './product/service';
import ProductController from './product/controller';
import ProductRouter from './product/router';

export default class Factory {
  private static _prisma = new PrismaClient();

  public static get userRouter() {
    const userRepository = new UserRepository(Factory._prisma);
    const userService = new UserService(userRepository);
    const userController = new UserController(userService);
    const userRouter = new UserRouter(Router(), userController);

    return userRouter.router;
  }

  public static get categoryRouter() {
    const categoryRepository = new CategoryRepository(Factory._prisma);
    const categoryService = new CategoryService(categoryRepository);
    const categoryController = new CategoryController(categoryService);
    const categoryRouter = new CategoryRouter(Router(), categoryController);

    return categoryRouter.router;
  }

  public static get productRouter() {
    const productRepository = new ProductRepository(Factory._prisma);
    const categoriesRepository = new CategoryRepository(Factory._prisma);
    const productService = new ProductService(productRepository, categoriesRepository);
    const productController = new ProductController(productService);
    const productRouter = new ProductRouter(Router(), productController);

    return productRouter.router;
  }
}