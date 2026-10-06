import { User } from './user.model';

export interface LoginRequest {
  username: string;
  password: string;
  expiresInMins?: number;
}

export interface LoginResponse extends User {
  accessToken: string;
  refreshToken: string;
}
