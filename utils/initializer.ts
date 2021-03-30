import { SocialLink } from "./types";

/**
 * @param {string} title 
 * @param {string} [url]
 * @returns {SocialLink}
 */

export function newSocialLink(title: string, url?: string): SocialLink {
  const lowerCaseTitle = title.toLowerCase();
  const path = `/icons/${lowerCaseTitle}.svg`;
  const description = `${title} white icon`;
  url ??= `https://${lowerCaseTitle}.com/ghaerdi`;

  return { title, url, path, description };
}