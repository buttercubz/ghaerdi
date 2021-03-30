import { newSocialLink } from "../utils/initializer";

describe('newSocialLink function', () => {
  test('only title argument', () => {
    const expectedResult = {
      title: "GitHub",
      url: "https://github.com/ghaerdi",
      path: "/icons/github.svg",
      description: "GitHub white icon"
    };

    expect(newSocialLink("GitHub")).toEqual(expectedResult)
  })

  test('title and url arguments', () => {
    const expectedResult = {
      title: "Linkedin",
      url: "https://linkedin.com/ghaerdi",
      path: "/icons/linkedin.svg",
      description: "Linkedin white icon"
    };

    expect(newSocialLink("Linkedin")).toEqual(expectedResult)
  })
})
