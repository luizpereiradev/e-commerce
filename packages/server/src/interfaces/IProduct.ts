import { ICategory } from "./ICategory";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categories: ICategory[];
}

export interface IProductCreateRequest {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categories: number[]; // Array de IDs de categorias às quais o produto pertence
}

export interface IProductUpdateRequest extends Partial<IProductCreateRequest> {
}
