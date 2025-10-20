import { AnalyticsData } from '../entities/Analytics';
import { AnalyticsRepository } from '../ports/AnalyticsRepository';

export class GetAnalytics {
  constructor(private repository: AnalyticsRepository) {}

  async execute(): Promise<AnalyticsData> {
    return this.repository.getAnalyticsData();
  }
}
