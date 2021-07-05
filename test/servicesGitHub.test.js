import { getRepositories } from "../services/github";

describe('function getRepositories from github', () => {
  test('should be a object', async () => {
    const expectedResult = "object";
    expect(typeof await getRepositories("ghaerdi")).toBe(expectedResult);
  })
})