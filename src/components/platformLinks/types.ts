import { EIconLibrary } from "pages/types";

export enum EPlatformLinkTitle {
  CODEPEN = "Codepen",
  GLITCH = "Glitch",
  HACKER_RANK = "Hacker Rank",
  DEV_TO = "Dev.to",
  FREE_CODE_CAMP = "freeCodeCamp",
  MY_TRAVEL_MAP = "My travel map",
}

export type TPlatformLink = {
  title: EPlatformLinkTitle;
  href: string;
  icon: string;
  iconPrefix: EIconLibrary;
  iconTitle: "test";
  description: string;
};
