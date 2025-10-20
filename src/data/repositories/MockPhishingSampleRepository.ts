import { PhishingSample, PhishingSampleFilters, PhishingSampleStats } from '../../domain/entities/PhishingSample';
import { PhishingSampleRepository } from '../../domain/ports/PhishingSampleRepository';
import { PhishingSampleModel } from '../models/PhishingSampleModel';

export class MockPhishingSampleRepository implements PhishingSampleRepository {
  private samples: PhishingSample[] = [
    {
      id: '1',
      url: 'https://suspicious-bank-login.com/verify-account',
      label: 'phishing',
      score: 0.95,
      confidence: 0.92,
      features: {
        urlLength: 45,
        domainAge: 30,
        suspiciousKeywords: ['bank', 'verify', 'account'],
        hasSuspiciousTld: false,
        hasSubdomain: false,
        hasPort: false,
        hasIpAddress: false,
        hasShortenedUrl: false,
        hasSuspiciousPath: true,
        hasSuspiciousQuery: false,
      },
      metadata: {
        createdAt: '2024-01-15T10:30:00Z',
        updatedAt: '2024-01-15T10:30:00Z',
        source: 'email_scan',
        verified: true,
      },
    },
    {
      id: '2',
      url: 'https://www.google.com/search?q=weather',
      label: 'legitimate',
      score: 0.05,
      confidence: 0.98,
      features: {
        urlLength: 35,
        domainAge: 3650,
        suspiciousKeywords: [],
        hasSuspiciousTld: false,
        hasSubdomain: false,
        hasPort: false,
        hasIpAddress: false,
        hasShortenedUrl: false,
        hasSuspiciousPath: false,
        hasSuspiciousQuery: true,
      },
      metadata: {
        createdAt: '2024-01-15T11:00:00Z',
        updatedAt: '2024-01-15T11:00:00Z',
        source: 'manual',
        verified: true,
      },
    },
    {
      id: '3',
      url: 'https://bit.ly/suspicious-link',
      label: 'phishing',
      score: 0.88,
      confidence: 0.85,
      features: {
        urlLength: 25,
        domainAge: 180,
        suspiciousKeywords: ['suspicious'],
        hasSuspiciousTld: false,
        hasSubdomain: false,
        hasPort: false,
        hasIpAddress: false,
        hasShortenedUrl: true,
        hasSuspiciousPath: true,
        hasSuspiciousQuery: false,
      },
      metadata: {
        createdAt: '2024-01-15T12:15:00Z',
        updatedAt: '2024-01-15T12:15:00Z',
        source: 'email_scan',
        verified: false,
      },
    },
  ];

  async getAll(filters?: PhishingSampleFilters): Promise<PhishingSample[]> {
    let filteredSamples = [...this.samples];

    if (filters) {
      if (filters.label) {
        filteredSamples = filteredSamples.filter(sample => sample.label === filters.label);
      }
      if (filters.minScore !== undefined) {
        filteredSamples = filteredSamples.filter(sample => sample.score >= filters.minScore!);
      }
      if (filters.maxScore !== undefined) {
        filteredSamples = filteredSamples.filter(sample => sample.score <= filters.maxScore!);
      }
      if (filters.verified !== undefined) {
        filteredSamples = filteredSamples.filter(sample => sample.metadata.verified === filters.verified);
      }
    }

    return filteredSamples;
  }

  async getById(id: string): Promise<PhishingSample | null> {
    const sample = this.samples.find(s => s.id === id);
    return sample || null;
  }

  async create(sample: Omit<PhishingSample, 'id' | 'metadata'>): Promise<PhishingSample> {
    const newSample = new PhishingSampleModel({
      ...sample,
      id: Date.now().toString(),
      metadata: {
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        source: 'api',
        verified: false,
      },
    });

    this.samples.push(newSample.toJSON());
    return newSample.toJSON();
  }

  async update(id: string, sample: Partial<PhishingSample>): Promise<PhishingSample> {
    const index = this.samples.findIndex(s => s.id === id);
    if (index === -1) {
      throw new Error('Sample not found');
    }

    this.samples[index] = {
      ...this.samples[index],
      ...sample,
      metadata: {
        ...this.samples[index].metadata,
        updatedAt: new Date().toISOString(),
      },
    };

    return this.samples[index];
  }

  async delete(id: string): Promise<void> {
    const index = this.samples.findIndex(s => s.id === id);
    if (index === -1) {
      throw new Error('Sample not found');
    }

    this.samples.splice(index, 1);
  }

  async getStats(filters?: PhishingSampleFilters): Promise<PhishingSampleStats> {
    const samples = await this.getAll(filters);
    
    const phishing = samples.filter(s => s.label === 'phishing').length;
    const legitimate = samples.filter(s => s.label === 'legitimate').length;
    const verified = samples.filter(s => s.metadata.verified).length;
    const unverified = samples.length - verified;
    
    const totalScore = samples.reduce((sum, s) => sum + s.score, 0);
    const totalConfidence = samples.reduce((sum, s) => sum + s.confidence, 0);

    return {
      total: samples.length,
      phishing,
      legitimate,
      averageScore: samples.length > 0 ? totalScore / samples.length : 0,
      averageConfidence: samples.length > 0 ? totalConfidence / samples.length : 0,
      verified,
      unverified,
    };
  }

  async predict(url: string): Promise<{ score: number; confidence: number; label: 'phishing' | 'legitimate' }> {
    // Mock prediction logic
    const suspiciousKeywords = ['bank', 'verify', 'account', 'login', 'secure', 'update'];
    const hasSuspiciousKeyword = suspiciousKeywords.some(keyword => 
      url.toLowerCase().includes(keyword)
    );
    
    const score = hasSuspiciousKeyword ? 0.8 + Math.random() * 0.2 : Math.random() * 0.3;
    const confidence = 0.7 + Math.random() * 0.3;
    const label = score > 0.5 ? 'phishing' : 'legitimate';

    return { score, confidence, label };
  }
}
