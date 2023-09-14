import { ICategory, ICategoryCreateRequest, ICategoryUpdateRequest } from "../interfaces/ICategory";
import { Conflict } from "../utils/errors/Conflict";
import { NotFound } from "../utils/errors/NotFound";
import CategoryRepository from "./repository";

export default class CategoryService {
  private _repository: CategoryRepository;

  constructor(repository = new CategoryRepository()) {
    this._repository = repository;
  }

  public async getAll(): Promise<ICategory[]> {
    return this._repository.getAll();
  }

  public async getById(id: number): Promise<ICategory> {
    const category = await this._repository.getById(id);

    if (!category) throw new NotFound("category not found");

    return category;
  }

  public async create(newCategory: ICategoryCreateRequest): Promise<ICategory> {
    const categoryExists = await this._repository.getByName(newCategory.name);

    if (categoryExists) throw new Conflict("category already exists");

    return this._repository.create(newCategory);
  }

  public async update(id: number, payload: ICategoryUpdateRequest): Promise<ICategory> {
    const category = await this._repository.getById(id);

    if (!category) throw new NotFound("category not found");

    return this._repository.update(id, payload);
  }

  public async delete(id: number): Promise<ICategory> {
    const category = await this._repository.getById(id);

    if (!category) throw new NotFound("category not found");

    return this._repository.delete(id);
  }
}
