import axios from 'axios';
import { GitHubRepository } from "../utils/types";

export async function getRepositories(username: string[]): Promise<GitHubRepository[]> {
    const response = await axios(`https://api.github.com/users/${username}/repos`);
    let repositories = await response.data;
    repositories = await Promise.allSettled(repositories.map(handleRepository));
    repositories = repositories.map((repository: any) => repository.value)

    return repositories;
}

async function handleRepository(repository: any): Promise<GitHubRepository> {
    const { name, description, language, watchers } = repository;
    const result = {
        name,
        description,
        language,
        watchers,
        url: repository["html_url"],
        stars: repository["stargazers_count"],
        updatedAt: repository["updated_at"]
    };

    return result;
}

async function getLanguages(repositoryURL: string): Promise<object> {
    const response = await axios(repositoryURL);
    return await response.data;
}