import { EIconLibrary } from "types";

export enum EPlatformLinkTitle {
  CODEPEN = "Codepen",
  GLITCH = "Glitch",
  HACKER_RANK = "Hacker Rank",
  DEV_TO = "Dev.to",
  FREE_CODE_CAMP = "freeCodeCamp",
  MY_TRAVEL_MAP = "My travel map",
}

export enum EPlatformLinkDescriptionTranslationKey {
  CODEPEN = "online community for testing and showcasing HTML, CSS and JavaScript code snippets",
  HACKER_RANK = "platform with competitive programming challenges",
  FREE_CODE_CAMP = "non-profit organization: an learning web platform, an community forum",
  DEV_TO = "constructive and inclusive social network for software developers",
  GLITCH = "collaboration platform for creating, hosting and mixing web apps",
  MY_TRAVEL_MAP = "map of places I've travelled to or lived in",
}

export enum EPlatformLink {
  CODEPEN = "https://codepen.io/arcbjorn",
  HACKER_RANK = "https://www.hackerrank.com/arcbjorn",
  FREE_CODE_CAMP = "https://www.freecodecamp.org/arcbjorn",
  DEV_TO = "https://dev.to/arcbjorn",
  GLITCH = "https://glitch.com/@arcbjorn",
  MY_TRAVEL_MAP = "https://www.mytravelmap.xyz/u/gg104931485347737929283",
}

export type TPlatformLink = {
  title: EPlatformLinkTitle;
  href: EPlatformLink;
  icon: string;
  iconPrefix: EIconLibrary;
  iconTitle: string;
  description: EPlatformLinkDescriptionTranslationKey;
};
