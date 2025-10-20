import { AnalyticsData, ThreatMetrics, ThreatTrend, ThreatCategory, SecurityInsight } from '../../domain/entities/Analytics';
import { AnalyticsRepository } from '../../domain/ports/AnalyticsRepository';

export class MockAnalyticsRepository implements AnalyticsRepository {
  private mockData: AnalyticsData = {
    metrics: {
      totalThreats: 2847,
      falsePositives: 23,
      detectionAccuracy: 98.7,
      responseTime: 1.2,
      activeMonitors: 156,
      systemUptime: 99.9,
    },
    trends: [
      { date: '2024-01-01', phishing: 45, malware: 12, socialEngineering: 8, other: 3 },
      { date: '2024-01-02', phishing: 52, malware: 15, socialEngineering: 6, other: 2 },
      { date: '2024-01-03', phishing: 38, malware: 18, socialEngineering: 9, other: 4 },
      { date: '2024-01-04', phishing: 61, malware: 14, socialEngineering: 7, other: 1 },
      { date: '2024-01-05', phishing: 47, malware: 16, socialEngineering: 11, other: 3 },
      { date: '2024-01-06', phishing: 55, malware: 13, socialEngineering: 5, other: 2 },
      { date: '2024-01-07', phishing: 43, malware: 17, socialEngineering: 8, other: 3 },
    ],
    categories: [
      {
        id: '1',
        name: 'Phishing Emails',
        count: 1247,
        percentage: 43.8,
        severity: 'high',
        trend: 'increasing',
      },
      {
        id: '2',
        name: 'Malicious URLs',
        count: 892,
        percentage: 31.3,
        severity: 'high',
        trend: 'stable',
      },
      {
        id: '3',
        name: 'Suspicious Domains',
        count: 456,
        percentage: 16.0,
        severity: 'medium',
        trend: 'decreasing',
      },
      {
        id: '4',
        name: 'Social Engineering',
        count: 252,
        percentage: 8.9,
        severity: 'medium',
        trend: 'increasing',
      },
    ],
    insights: [
      {
        id: '1',
        title: 'Unusual spike in phishing attempts detected',
        description: 'A 40% increase in phishing emails targeting financial institutions was detected in the last 24 hours.',
        icon: '⚠️',
        action: 'Review email filters and update threat intelligence',
        priority: 'high',
        category: 'threat',
        createdAt: '2024-01-15T14:30:00Z',
        resolved: false,
      },
      {
        id: '2',
        title: 'System performance optimization available',
        description: 'Detection algorithms can be optimized to improve response time by 15%.',
        icon: '⚡',
        action: 'Apply performance update',
        priority: 'medium',
        category: 'performance',
        createdAt: '2024-01-15T12:00:00Z',
        resolved: false,
      },
      {
        id: '3',
        title: 'New threat intelligence feed available',
        description: 'Updated threat signatures and IOCs are ready for deployment.',
        icon: '🔄',
        action: 'Deploy updates',
        priority: 'medium',
        category: 'update',
        createdAt: '2024-01-15T10:15:00Z',
        resolved: true,
      },
    ],
    lastUpdated: new Date().toISOString(),
  };

  async getAnalyticsData(): Promise<AnalyticsData> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return { ...this.mockData };
  }

  async getMetrics(): Promise<ThreatMetrics> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { ...this.mockData.metrics };
  }

  async getTrends(days: number = 7): Promise<ThreatTrend[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return this.mockData.trends.slice(-days);
  }

  async getCategories(): Promise<ThreatCategory[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return [...this.mockData.categories];
  }

  async getInsights(): Promise<SecurityInsight[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return [...this.mockData.insights];
  }

  async refreshData(): Promise<void> {
    // Simulate data refresh
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.mockData.lastUpdated = new Date().toISOString();
  }
}
