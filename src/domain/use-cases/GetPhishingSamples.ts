import { PhishingSample, PhishingSampleFilters } from '../entities/PhishingSample';
import { PhishingSampleRepository } from '../ports/PhishingSampleRepository';

export class GetPhishingSamples {
  constructor(private repository: PhishingSampleRepository) {}

  async execute(filters?: PhishingSampleFilters): Promise<PhishingSample[]> {
    return this.repository.getAll(filters);
  }
}
