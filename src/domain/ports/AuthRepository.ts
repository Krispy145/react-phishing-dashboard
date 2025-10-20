import { User, AuthTokens, LoginCredentials, AuthState } from '../entities/User';

export interface AuthRepository {
  login(credentials: LoginCredentials): Promise<AuthTokens>;
  logout(): Promise<void>;
  refreshToken(refreshToken: string): Promise<AuthTokens>;
  getCurrentUser(): Promise<User | null>;
  validateToken(token: string): Promise<boolean>;
}
