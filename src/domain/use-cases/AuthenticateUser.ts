import { User, LoginCredentials, AuthTokens } from '../entities/User';
import { AuthRepository } from '../ports/AuthRepository';

export class AuthenticateUser {
  constructor(private repository: AuthRepository) {}

  async execute(credentials: LoginCredentials): Promise<{ user: User; tokens: AuthTokens }> {
    const tokens = await this.repository.login(credentials);
    const user = await this.repository.getCurrentUser();
    
    if (!user) {
      throw new Error('Failed to get user after authentication');
    }

    return { user, tokens };
  }
}
