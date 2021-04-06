import axios from 'axios';
import { GitHubRepository } from "../utils/types";

export async function getRepositories(username: string[], cachedRepositories?: object): Promise<GitHubRepository[]> {
    let repositories: GitHubRepository[] = null!;

    try {
        const response = await axios(`https://api.github.com/users/${username}/repos`);
        let data = await response.data;
        data = await Promise.allSettled(data.map(handleRepository));
        repositories = data.map((repository: any) => repository.value)
    }
    catch (error) {
        if (!cachedRepositories) throw error;
    }

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