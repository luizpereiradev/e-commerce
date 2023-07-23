import { faker } from "@faker-js/faker";
import {
  IProduct,
  IProductCreateRequest,
} from "../../../src/interfaces/IProduct";

const Product: IProduct = {
  id: 2,
  name: faker.person.firstName(),
  description: faker.lorem.paragraph(),
  price: faker.number.float(),
  imageUrl: faker.image.url(),
  categories: [],
};

const newProduct: IProductCreateRequest = {
  name: faker.person.firstName(),
  description: faker.lorem.paragraph(),
  price: faker.number.float(),
  imageUrl: faker.image.url(),
  categories: [],
};

const editProduct: IProduct = {
  id: 2,
  ...newProduct,
  categories: [],
};

type get = {
  mock: IProduct[];
  response: IProduct[];
};

type put = {
  request: IProductCreateRequest;
  response: IProduct;
  mock: IProduct;
};

export const get: get = {
  mock: [...Array(10).fill(Product)],
  response: [...Array(10).fill(Product)],
};

type post = {
  request: IProductCreateRequest;
  response: IProduct;
};

export const post: post = {
  request: newProduct,
  response: Product,
};

export const put: put = {
  request: newProduct,
  response: editProduct,
  mock: Product,
};


export const getByIdMock = {
    ...Product,
}