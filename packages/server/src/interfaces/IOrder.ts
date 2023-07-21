import { IProduct } from "./IProduct";

export interface IOrder {
  id: number;
  userId: number;
  products: IProduct[];
  totalPrice: number;
  createdAt: Date;
}

export interface IOrderCreateRequest {
  userId: number;
  products: number[]; // Array de IDs de produtos incluídos no pedido
  totalPrice: number;
}

export interface IOrderUpdateRequest extends Partial<IOrderCreateRequest> {
}
