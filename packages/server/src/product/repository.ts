import { PrismaClient } from "@prisma/client";
import {
  IProduct,
  IProductCreateRequest,
  IProductUpdateRequest,
} from "../interfaces/IProduct";

export default class ProductRepository {
  private _prisma: PrismaClient;

  constructor(prisma = new PrismaClient()) {
    this._prisma = prisma;
  }

  public async getAll(): Promise<IProduct[]> {
    return this._prisma.product.findMany({ include: { categories: true } });
  }

  public async getById(id: number): Promise<IProduct | null> {
    return this._prisma.product.findUnique({
      include: { categories: true },
      where: { id },
    });
  }

  public async create(newProduct: IProductCreateRequest): Promise<IProduct> {
    return this._prisma.product.create({
      data: {
        ...newProduct,
        categories: {
          connect: newProduct.categories.map((categoryId) => ({ id: categoryId })),
        }
      },
    });
  }

  public async update(
    id: number,
    payload: IProductUpdateRequest
  ): Promise<IProduct> {
    return this._prisma.product.update({ where: { id }, data: {
      ...payload,
      categories: {
        connect: payload.categories?.map((categoryId) => ({ id: categoryId })),
      }
    } });
  }

  public async delete(id: number): Promise<IProduct> {
    return this._prisma.product.delete({ where: { id } });
  }
}
