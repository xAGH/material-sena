import { User } from './user.model';

export interface LoginRequest {
  username: string;
  password: string;
  expiresInMins?: number;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface LoginResponseWithUser extends User, LoginResponse {}
