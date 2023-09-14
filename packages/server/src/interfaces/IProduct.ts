import { ICategory } from "./ICategory";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categories?: ICategory[];
}

export interface IProductCreateRequest {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categories: number[];
}

export type IProductUpdateRequest = Partial<IProductCreateRequest>
