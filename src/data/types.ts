import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Ei18nToken } from "i18n/types";
import { EIconLibrary } from "types";

export type TLink<TLinkPartial = Record<string, string>> = TLinkPartial & {
  href: ELinkUrl;
  icon: IconName | string;
  iconPrefix: EIconLibrary;
  iconTitle: string;
};

export type IHomePageLinkPartial = {
  title: ELinkTitle | Ei18nToken;
};

export interface IPlatformLinkPartial {
  title: ELinkTitle | Ei18nToken;
}

export enum ELinkTitle {
  LINKEDIN = "LinkedIn",
  GITHUB = "Github",
  EMAIL = "EMail",

  BLOG = "Blog",
  LEETCODE = "LeetCode",
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

  PORTFOLIO = "https://arcbjorn.com",
  COPY_MAIL = "oleg.luganskiy@gmail.com",

  BLOG = "https://blog.arcbjorn.com/",
  LEETCODE = "https://leetcode.com/arcbjorn",
  MY_TRAVEL_MAP = "https://www.mytravelmap.xyz/u/gg104931485347737929283",

  TWITTER = "https://twitter.com/arcbjorn",
  REDDIT = "https://www.reddit.com/u/Arcbjorn",
  INSTAGRAM = "https://www.instagram.com/arcbjorn",
  SPOTIFY = "https://open.spotify.com/user/hrpn170u8d82ch90nw6y1floe",
  GOOD_READS = "https://www.goodreads.com/arcbjorn",
}
