import { Ei18nToken } from "i18n/types";
import { EIconLibrary } from "types";

export enum EPlatformLinkTitle {
  CODEPEN = "Codepen",
  HACKER_RANK = "Hacker Rank",
  LEETCODE = "LeetCode",
  STEPIK = "Stepik",
  DEV_TO = "Dev.to",
  FREE_CODE_CAMP = "freeCodeCamp",
  GLITCH = "Glitch",
  MY_TRAVEL_MAP = "My travel map",
}

export enum EPlatformLink {
  CODEPEN = "https://codepen.io/arcbjorn",
  HACKER_RANK = "https://www.hackerrank.com/arcbjorn",
  LEETCODE = "https://leetcode.com/arcbjorn",
  STEPIK = "https://stepik.org/users/247781885",
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
  description: Ei18nToken;
};