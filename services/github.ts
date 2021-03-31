import axios from 'axios';
import { GitHubRepository } from "../utils/types";


export async function getRepositories(username: string): Promise<GitHubRepository> {
    const response = await axios(`https://api.github.com/users/${username}/repos`);
    let repositories = await response.data;
    repositories = await Promise.allSettled(repositories.map(handleRepository));

    return repositories;
}

async function handleRepository(repository: any): Promise<GitHubRepository> {
    const { name, description, language, watchers } = repository;
    const response = await axios(repository["languages_url"]);
    const languages = await response.data;
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