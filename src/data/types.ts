import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Ei18nToken } from "i18n/types";
import { EIconLibrary } from "types";

export enum ELinkCategory {
  BLOG = "Blog",
  SHOWCASE = "Showcase",
  LEARNING = "Learning",
  CUSTOM = "Custom",
  SOCIAL = "Social",
}

export type TLink<TLinkPartial = Record<string, string>> = TLinkPartial & {
  href: ELinkUrl;
  icon: IconName | string;
  iconPrefix: EIconLibrary;
  iconTitle: string;
  category: ELinkCategory;
};

export type IHomePageLinkPartial = {
  title: ELinkTitle | Ei18nToken;
};

export interface IPlatformLinkPartial {
  title: ELinkTitle;
  description: Ei18nToken;
}

export enum ELinkTitle {
  LINKEDIN = "LinkedIn",
  GITHUB = "Github",
  EMAIL = "EMail",

  HASHNODE = "Hashnode",
  CODEPEN = "Codepen",
  HACKER_RANK = "Hacker Rank",
  LEETCODE = "LeetCode",
  DEV_TO = "Dev.to",
  STACK_OVERFLOW = "Stack Overflow",
  MEDIUM = "Medium",
  STEPIK = "Stepik",
  FREE_CODE_CAMP = "freeCodeCamp",
  GLITCH = "Glitch",
  MY_TRAVEL_MAP = "My travel map",

  TWITTER = "Twitter",
  REDDIT = "Reddit",
  INSTAGRAM = "Instagram",
  SPOTIFY = "Spotify",
  GOOD_READS = "GoodReads",
}

export enum ELinkUrl {
  LINKEDIN = "https://www.linkedin.com/in/oleg-luganskiy/",
  GITHUB = "https://www.github.com/arcbjorn",
  MAIL = "mailto:oleg.luganskiy@gmail.com?subject=Employment%20Offer&body=Hi%20Oleg",
  CV = "OL.CV.pdf",

  HASHNODE = "https://blog.arcbjorn.com/",
  CODEPEN = "https://codepen.io/arcbjorn",
  HACKER_RANK = "https://www.hackerrank.com/arcbjorn",
  LEETCODE = "https://leetcode.com/arcbjorn",
  FREE_CODE_CAMP = "https://www.freecodecamp.org/arcbjorn",
  DEV_TO = "https://dev.to/arcbjorn",
  STACK_OVERFLOW = "https://stackoverflow.com/users/13143157/arcbjorn",
  MEDIUM = "https://arcbjorn.medium.com/",
  STEPIK = "https://stepik.org/users/247781885",
  GLITCH = "https://glitch.com/@arcbjorn",
  MY_TRAVEL_MAP = "https://www.mytravelmap.xyz/u/gg104931485347737929283",

  TWITTER = "https://twitter.com/arcbjorn",
  REDDIT = "https://www.reddit.com/u/Arcbjorn",
  INSTAGRAM = "https://instagram.com/oleg_arc",
  SPOTIFY = "https://open.spotify.com/user/hrpn170u8d82ch90nw6y1floe",
  GOOD_READS = "https://www.goodreads.com/arcbjorn",
}
