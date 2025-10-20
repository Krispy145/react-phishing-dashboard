import { PhishingSample } from '../../domain/entities/PhishingSample';

export class PhishingSampleModel implements PhishingSample {
  id: string;
  url: string;
  label: 'phishing' | 'legitimate';
  score: number;
  confidence: number;
  features: {
    urlLength: number;
    domainAge: number;
    suspiciousKeywords: string[];
    hasSuspiciousTld: boolean;
    hasSubdomain: boolean;
    hasPort: boolean;
    hasIpAddress: boolean;
    hasShortenedUrl: boolean;
    hasSuspiciousPath: boolean;
    hasSuspiciousQuery: boolean;
  };
  metadata: {
    createdAt: string;
    updatedAt: string;
    source: string;
    verified: boolean;
  };

  constructor(data: Partial<PhishingSample>) {
    this.id = data.id || '';
    this.url = data.url || '';
    this.label = data.label || 'legitimate';
    this.score = data.score || 0;
    this.confidence = data.confidence || 0;
    this.features = data.features || {
      urlLength: 0,
      domainAge: 0,
      suspiciousKeywords: [],
      hasSuspiciousTld: false,
      hasSubdomain: false,
      hasPort: false,
      hasIpAddress: false,
      hasShortenedUrl: false,
      hasSuspiciousPath: false,
      hasSuspiciousQuery: false,
    };
    this.metadata = data.metadata || {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      source: 'manual',
      verified: false,
    };
  }

  toJSON(): PhishingSample {
    return {
      id: this.id,
      url: this.url,
      label: this.label,
      score: this.score,
      confidence: this.confidence,
      features: this.features,
      metadata: this.metadata,
    };
  }
}
