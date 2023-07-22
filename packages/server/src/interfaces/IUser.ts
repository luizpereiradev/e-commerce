// interface para representar os dados do login do usuário
export interface IUserLoginRequest {
  email: string;
  password: string;
}

// Interface para representar os dados do usuário a serem criados
export interface IUserCreateRequest extends IUserLoginRequest {
  name: string;
  isAdmin?: boolean; // Opcional: indica se o usuário é administrador
}

// Interface para representar os dados atualizados do usuário
export type IUserUpdateRequest = Partial<IUserCreateRequest>

// Interface para representar os dados completos do usuário, incluindo os dados criados
export interface IUser extends IUserCreateRequest {
  id: number;
}

export interface IUserToken {
  token: string;
  expiresAt: Date;
}
