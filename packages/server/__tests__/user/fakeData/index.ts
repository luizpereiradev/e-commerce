import { IUser } from '../../../src/interfaces/IUser';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcryptjs';

const admin: IUser = {
  id: faker.number.int(),
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: bcrypt.hashSync(faker.internet.password(), 10),
  isAdmin: true
};

const user: IUser = {
  id: faker.number.int(),
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: bcrypt.hashSync(faker.internet.password(), 10),
  isAdmin: false
};

const updatedUser: IUser = {
  ...user,
  name: faker.person.firstName(),
};

const newUser: IUser = {
  id: faker.number.int(),
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: bcrypt.hashSync(faker.internet.password(), 10),
  isAdmin: false
};

const deletedUser: IUser = {
  ...user
};

type get = {
  mock: IUser[];
  response: IUser[];
};

type post = {
  request: IUser;
  response: IUser;
};

type put = {
  getByIdMock: IUser;
  mock: IUser;
  request: {
    firstName: string;
  };
  response: IUser;
};

type del = {
  getByIdMock: IUser;
  mock: IUser;
};

export const get: get = {
  mock: [...Array(2).fill(admin), ...Array(8).fill(user)],
  response: [...Array(2).fill(admin), ...Array(8).fill(user)],
};

export const post: post = {
  request: newUser,
  response: newUser,
};

export const put: put = {
  getByIdMock: user,
  mock: updatedUser,
  request: {
    firstName: updatedUser.name,
  },
  response: updatedUser,
};

export const del: del = {
  getByIdMock: user,
  mock: deletedUser,
};
