export const state = () => ({ repositories: [{ name: "Testing", description: "Test of popola", url: "https://mmg.com/", language: "JavaScript" }] });

export const mutations = {
    setRepositories(state: any, repositories: object) {
        state.repositories = repositories;
    }
}