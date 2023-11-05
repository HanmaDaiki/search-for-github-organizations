import { Octokit } from '@octokit/core';
import { IOrganizationRepo } from '../types';

const octokit = new Octokit({
  auth: import.meta.env.REACT_APP_GITHUB_TOKEN,
});

export const getOrganizationReposByName = async (name: string): Promise<IOrganizationRepo[]> => {
  const res = await octokit.request(`GET /orgs/${name}/repos`, {
    org: name,
    per_page: 5,
    page: 1,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return res.data;
};

export const paginateTable = async (name: string, page: number): Promise<IOrganizationRepo[]> => {
  const res = await octokit.request(`GET /orgs/${name}/repos`, {
    org: name,
    per_page: 5,
    page,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return res.data;
};
