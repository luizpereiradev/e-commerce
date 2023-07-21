export interface IUserLoginRequest {
  email: string;
  password: string;
}

export interface IUserToken {
  token: string;
  expiresAt: Date;
}
