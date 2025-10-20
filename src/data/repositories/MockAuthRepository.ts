import { User, AuthTokens, LoginCredentials } from '../../domain/entities/User';
import { AuthRepository } from '../../domain/ports/AuthRepository';

export class MockAuthRepository implements AuthRepository {
  private users: User[] = [
    {
      id: '1',
      email: 'admin@phishguard.com',
      name: 'John Doe',
      role: 'admin',
      permissions: ['read', 'write', 'delete', 'admin'],
      preferences: {
        theme: 'light',
        notifications: true,
        emailAlerts: true,
      },
      metadata: {
        createdAt: '2024-01-01T00:00:00Z',
        lastLoginAt: new Date().toISOString(),
        isActive: true,
      },
    },
    {
      id: '2',
      email: 'analyst@phishguard.com',
      name: 'Jane Smith',
      role: 'analyst',
      permissions: ['read', 'write'],
      preferences: {
        theme: 'dark',
        notifications: true,
        emailAlerts: false,
      },
      metadata: {
        createdAt: '2024-01-01T00:00:00Z',
        lastLoginAt: new Date().toISOString(),
        isActive: true,
      },
    },
  ];

  private currentUser: User | null = null;
  private currentTokens: AuthTokens | null = null;

  async login(credentials: LoginCredentials): Promise<AuthTokens> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = this.users.find(u => u.email === credentials.email);
    
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Mock password validation (in real app, this would be hashed)
    if (credentials.password !== 'password123') {
      throw new Error('Invalid credentials');
    }

    const tokens: AuthTokens = {
      accessToken: `mock-access-token-${Date.now()}`,
      refreshToken: `mock-refresh-token-${Date.now()}`,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
      tokenType: 'Bearer',
    };

    this.currentUser = user;
    this.currentTokens = tokens;

    // Update last login
    user.metadata.lastLoginAt = new Date().toISOString();

    return tokens;
  }

  async logout(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 300));
    this.currentUser = null;
    this.currentTokens = null;
  }

  async refreshToken(refreshToken: string): Promise<AuthTokens> {
    await new Promise(resolve => setTimeout(resolve, 500));

    if (!this.currentTokens || this.currentTokens.refreshToken !== refreshToken) {
      throw new Error('Invalid refresh token');
    }

    const newTokens: AuthTokens = {
      accessToken: `mock-access-token-${Date.now()}`,
      refreshToken: `mock-refresh-token-${Date.now()}`,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      tokenType: 'Bearer',
    };

    this.currentTokens = newTokens;
    return newTokens;
  }

  async getCurrentUser(): Promise<User | null> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return this.currentUser;
  }

  async validateToken(token: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return this.currentTokens?.accessToken === token;
  }
}
