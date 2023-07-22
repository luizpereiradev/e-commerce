import { PrismaClient } from "@prisma/client";
import {
  ICategory,
  ICategoryCreateRequest,
  ICategoryUpdateRequest,
} from "../interfaces/ICategory";

export default class CategoryRepository {
  private _prisma: PrismaClient;

  constructor(prisma = new PrismaClient()) {
    this._prisma = prisma;
  }

  public async getAll(): Promise<ICategory[]> {
    return this._prisma.category.findMany({
      include: {
        subCategories: true,
      },
    });
  }

  public async getById(id: number): Promise<ICategory | null> {
    return this._prisma.category.findUnique({ where: { id } });
  }

  public async getByName(name: string): Promise<ICategory | null> {
    return this._prisma.category.findUnique({ where: { name } });
  }

  public async create(newCategory: ICategoryCreateRequest): Promise<ICategory> {
    return this._prisma.category.create({ data: newCategory });
  }

  public async update(
    id: number,
    payload: ICategoryUpdateRequest
  ): Promise<ICategory> {
    return this._prisma.category.update({ where: { id }, data: payload });
  }

  public async delete(id: number): Promise<ICategory> {
    return this._prisma.category.delete({ where: { id } });
  }
}
