import { PhishingSampleRepository } from '../../domain/ports/PhishingSampleRepository';
import { AnalyticsRepository } from '../../domain/ports/AnalyticsRepository';
import { AuthRepository } from '../../domain/ports/AuthRepository';
import { MockPhishingSampleRepository } from '../../data/repositories/MockPhishingSampleRepository';
import { MockAnalyticsRepository } from '../../data/repositories/MockAnalyticsRepository';
import { MockAuthRepository } from '../../data/repositories/MockAuthRepository';

export class Container {
  private static instance: Container;
  private repositories: Map<string, any> = new Map();

  private constructor() {
    this.initializeRepositories();
  }

  public static getInstance(): Container {
    if (!Container.instance) {
      Container.instance = new Container();
    }
    return Container.instance;
  }

  private initializeRepositories(): void {
    // Register repositories
    this.repositories.set('phishingSampleRepository', new MockPhishingSampleRepository());
    this.repositories.set('analyticsRepository', new MockAnalyticsRepository());
    this.repositories.set('authRepository', new MockAuthRepository());
  }

  public getPhishingSampleRepository(): PhishingSampleRepository {
    return this.repositories.get('phishingSampleRepository');
  }

  public getAnalyticsRepository(): AnalyticsRepository {
    return this.repositories.get('analyticsRepository');
  }

  public getAuthRepository(): AuthRepository {
    return this.repositories.get('authRepository');
  }
}

// Export singleton instance
export const container = Container.getInstance();
