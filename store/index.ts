export const state = () => ({
    repositories: null
});

export const mutations = {
    setRepositories(state: any, repositories: object) {
        state.repositories = repositories;
    }
};