import { IProduct } from "./IProduct";

export interface ICategory {
  id: number;
  name: string;
  parent?: ICategory;
  products: IProduct[];
  subCategories: ICategory[];
}

export interface ICategoryCreateRequest {
  name: string;
  parentId?: number; // Opcional: indica o ID da categoria pai, se houver subcategorias
}

export interface ICategoryUpdateRequest extends Partial<ICategoryCreateRequest> {
}