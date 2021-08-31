import { EIconLibrary } from "pages/types";

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

export type TPlatformLink = {
  title: EPlatformLinkTitle;
  href: string;
  icon: string;
  iconPrefix: EIconLibrary;
  iconTitle: string;
  description: EPlatformLinkDescriptionTranslationKey;
};
