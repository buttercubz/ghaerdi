import axios from 'axios';
import { GitHubRepository } from "../utils/types";

export async function getRepositories(username: string[]): Promise<GitHubRepository[]> {
    const response = await axios(`https://api.github.com/users/${username}/repos`);
    let repositories = await response.data;
    repositories = await Promise.allSettled(repositories.map(handleRepository));

    return repositories;
}

async function handleRepository(repository: any): Promise<GitHubRepository> {
    const { name, description, language, watchers } = repository;
    const languages = await getLanguages(repository["languages_url"]);
    return {
        name,
        description,
        language,
        languages,
        watchers,
        url: repository["html_url"],
        stars: repository["stargazers_count"],
        updatedAt: repository["updated_at"]
    };
}

async function getLanguages(repositoryURL: string): Promise<object> {
    const response = await axios(repositoryURL);
    return await response.data;
}