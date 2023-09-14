import { IUser, IUserCreateRequest, IUserUpdateRequest, IUserToken } from "../interfaces/IUser";
import { Conflict } from "../utils/errors/Conflict";
import { NotFound } from "../utils/errors/NotFound";
import { Unauthorized } from "../utils/errors/Unauthorized";
import JwtToken from "../utils/jwtToken";
import UserRepository from "./repository";
import bcrypt from "bcryptjs";

export default class UserService {
  private _repository: UserRepository;

  constructor(repository = new UserRepository()) {
    this._repository = repository;
  }

  public async getAll(): Promise<IUser[]> {
    return this._repository.getAll();
  }

  public async getById(id: number): Promise<IUser> {
    const user = await this._repository.getById(id);

    if (!user) throw new NotFound("user not found");

    return user;
  }

  public async create(newUser: IUserCreateRequest): Promise<IUser> {
    const userExists = await this._repository.getByEmail(newUser.email);

    if (userExists) throw new Conflict("user already exists");

    newUser.password = await bcrypt.hash(newUser.password, 10);

    return this._repository.create(newUser);
  }

  public async update(id: number, payload: IUserUpdateRequest): Promise<IUser> {
    const user = await this._repository.getById(id);

    if (!user) throw new NotFound("user not found");

    if(payload.email && user.email !== payload.email) {
      const userExists = await this._repository.getByEmail(payload.email);
      if(userExists) throw new Conflict("email already exists");
    }


    return this._repository.update(id, payload);
  }

  public async delete(id: number): Promise<IUser> {
    const user = await this._repository.getById(id);

    if (!user) throw new NotFound("user not found");

    return this._repository.delete(id);
  }

  public async login(email: string, password: string): Promise<IUserToken> {
    const jwtToken = new JwtToken();
    const user = await this._repository.getByEmail(email);

    if (!user) throw new NotFound("user not found");

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) throw new Unauthorized("password does not match");

    return {
        token: jwtToken.sign({ id: user.id }),
        expiresAt: new Date(Date.now() + 86400000) // 1 day
    };
  }
}
