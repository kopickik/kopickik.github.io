import { ThirdPartyService } from './thirdPartyService';

export const GithubService = new ThirdPartyService({
  baseUrl: `https://api.github.com/repos/${owner}/${repo}`,
  token: process.env.GITHUB_TOKEN || '',
});
