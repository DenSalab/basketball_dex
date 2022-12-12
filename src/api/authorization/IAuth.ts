export interface LoginRequest {
  login: string;
  password: string;
}

export interface LoginResult {
  name: string;
  avatarUrl: string;
  token: string;
}

export interface ChangeUserRequest {
  userName: string;
  avatarUrl: string;
}

export interface RegisterUserRequest {
  userName: string;
  login: string;
  password: string;
}
