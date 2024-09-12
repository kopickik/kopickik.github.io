import axios from 'axios';
import {
  Commit,
  Issue,
  IThirdPartyService,
  Repository,
  ThirdPartyServiceConfig,
  Workflow,
} from './models';

export class ThirdPartyService implements IThirdPartyService {
  private baseUrl: string;
  private token?: string;
  private headers?: Record<string, string> = {};

  constructor(config: ThirdPartyServiceConfig) {
    this.baseUrl = config.baseUrl;
    this.token = config.token;
    if (config.headers) {
      this.headers = config.headers;
    }
  }

  setBaseUrl(baseUrl: string): this {
    this.baseUrl = baseUrl;
    return this;
  }

  setToken(token: string): this {
    this.token = token;
    return this;
  }

  setHeaders(headers: Record<string, string>): this {
    this.headers = { ...this.headers, ...headers };
    return this;
  }

  async fetchWorkflows(): Promise<Workflow[]> {
    const data = await this.makeRequest<any>('/actions/runs');
    return this.mapWorkflows(data);
  }

  async fetchRepository(): Promise<Repository> {
    const data = await this.makeRequest<Repository>('');
    return {
      id: data.id,
      name: data.name,
      full_name: data.full_name,
      description: data.description,
      stargazers_count: data.stargazers_count,
      forks_count: data.forks_count,
    };
  }

  async fetchCommits(): Promise<Commit[]> {
    const data = await this.makeRequest<any[]>('/commits');
    return data.map((commit: any) => ({
      sha: commit.sha,
      commit: {
        message: commit.commit.message,
        author: {
          name: commit.commit.author.name,
          date: commit.commit.author.date,
        },
      },
      author: {
        login: commit.author.login,
      },
    }));
  }

  async fetchIssues(): Promise<Issue[]> {
    const data = await this.makeRequest<any[]>('/issues');
    return data.map((issue: any) => ({
      id: issue.id,
      title: issue.title,
      state: issue.state,
      body: issue.body,
      created_at: issue.created_at,
      updated_at: issue.updated_at,
    }));
  }

  private async makeRequest<T>(endpoint: string): Promise<T> {
    try {
      const response = await axios.get(`${this.baseUrl}${endpoint}`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          ...this.headers,
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching data from ${endpoint}`, error);
      throw error;
    }
  }

  private mapWorkflows(data: any): Workflow[] {
    return data.workflow_runs.map((run: any) => ({
      id: run.id,
      name: run.name,
      status: run.status,
      last_run: run.updated_at,
    }));
  }

  d;
}
