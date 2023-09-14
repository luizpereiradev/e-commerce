import CategoryRepository from "../category/repository";
import {
  IProduct,
  IProductCreateRequest,
  IProductUpdateRequest,
} from "../interfaces/IProduct";

import { NotFound } from "../utils/errors/NotFound";

import ProductRepository from "./repository";

export default class ProductService {
  private _repository: ProductRepository;
  private _categoriesRepository: CategoryRepository;

  constructor(
    repository = new ProductRepository(),
    categoriesRepository = new CategoryRepository()
  ) {
    this._repository = repository;
    this._categoriesRepository = categoriesRepository;
  }

  public async getAll(): Promise<IProduct[]> {
    return this._repository.getAll();
  }

  public async getById(id: number): Promise<IProduct> {
    const product = await this._repository.getById(id);

    if (!product) throw new NotFound("product not found");

    return product;
  }

  public async create(newProduct: IProductCreateRequest): Promise<IProduct> {
    if (newProduct.categories) {
      for (const categoryId of newProduct.categories) {
        const category = await this._categoriesRepository.getById(categoryId);
        if (!category) {
          throw new NotFound(`category id: ${categoryId} not found`);
        }
      }
    }

    return this._repository.create(newProduct);
  }

  public async update(
    id: number,
    payload: IProductUpdateRequest
  ): Promise<IProduct> {
    if (payload.categories) {
      for (const categoryId of payload.categories) {
        const category = await this._categoriesRepository.getById(categoryId);
        if (!category) {
          throw new NotFound(`category id: ${categoryId} not found`);
        }
      }
    }

    return this._repository.update(id, payload);
  }

  public async delete(id: number): Promise<IProduct> {
    const product = await this._repository.getById(id);

    if (!product) throw new NotFound("product not found");

    return this._repository.delete(id);
  }
}
