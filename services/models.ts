export interface Workflow {
  id: number;
  name: string;
  status: string;
  last_run: string;
}

export interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
}

export interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  author: {
    login: string;
  };
}

export interface Issue {
  id: number;
  title: string;
  state: string;
  body: string;
  created_at: string;
  updated_at: string;
}

export interface ThirdPartyServiceConfig {
  baseUrl: string;
  token?: string;
  headers?: Record<string, string>;
}

export interface IThirdPartyService {
  setBaseUrl(baseUrl: string): this;
  setToken(token: string): this;
  setHeaders(headers: Record<string, string>): this;
  fetchWorkflows(): Promise<Workflow[]>;
  fetchRepository(): Promise<Repository>;
  fetchCommits(): Promise<Commit[]>;
  fetchIssues(): Promise<Issue[]>;
}
