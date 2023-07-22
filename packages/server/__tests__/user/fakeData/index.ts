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
}

type get = {
  mock: IUser[],
  response: IUser[]
}

export const get = {
  mock: [...Array(2).fill(admin), ...Array(8).fill(user)],
  response:[...Array(2).fill(admin), ...Array(8).fill(user)],
} 


export const put = {
  getByIdMock: user, 
  mock: updatedUser,
  request: {   
    firstName: updatedUser.name,
  },
  response: updatedUser, 
};