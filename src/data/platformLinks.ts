import { EIconLibrary } from "types";
import {
  ELinkUrl,
  TLink,
  ELinkCategory,
  IPlatformLinkPartial,
  ELinkTitle,
} from "data/types";
import { Ei18nToken } from "i18n/types";

export const customLinks: TLink<IPlatformLinkPartial>[] = [
  {
    title: ELinkTitle.MY_TRAVEL_MAP,
    category: ELinkCategory.CUSTOM,
    href: ELinkUrl.MY_TRAVEL_MAP,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "galactic-republic",
    iconTitle: "My travel map",
    description: Ei18nToken.MY_TRAVEL_MAP,
  },
  {
    title: ELinkTitle.STACK_OVERFLOW,
    category: ELinkCategory.CUSTOM,
    href: ELinkUrl.STACK_OVERFLOW,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "stack-overflow",
    iconTitle: "StackOverflow",
    description: Ei18nToken.STACK_OVERFLOW,
  },
];

export const learningLinks: TLink<IPlatformLinkPartial>[] = [
  {
    title: ELinkTitle.HACKER_RANK,
    category: ELinkCategory.LEARNING,
    href: ELinkUrl.HACKER_RANK,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "hackerrank",
    iconTitle: "Hacker Rank",
    description: Ei18nToken.HACKER_RANK,
  },
  {
    title: ELinkTitle.LEETCODE,
    category: ELinkCategory.LEARNING,
    href: ELinkUrl.LEETCODE,
    iconPrefix: EIconLibrary.CUSTOM,
    icon: "leetcode",
    iconTitle: "LeetCode",
    description: Ei18nToken.LEETCODE,
  },
  {
    title: ELinkTitle.STEPIK,
    category: ELinkCategory.LEARNING,
    href: ELinkUrl.STEPIK,
    iconPrefix: EIconLibrary.CUSTOM,
    icon: "stepik",
    iconTitle: "Stepik",
    description: Ei18nToken.STEPIK,
  },
  {
    title: ELinkTitle.FREE_CODE_CAMP,
    category: ELinkCategory.LEARNING,
    href: ELinkUrl.FREE_CODE_CAMP,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "free-code-camp",
    iconTitle: "freeCodeCamp",
    description: Ei18nToken.FREE_CODE_CAMP,
  },
];

export const blogLinks: TLink<IPlatformLinkPartial>[] = [
  {
    title: ELinkTitle.HASHNODE,
    category: ELinkCategory.BLOG,
    href: ELinkUrl.HASHNODE,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "hashnode",
    iconTitle: "Hashnode",
    description: Ei18nToken.HASHNODE,
  },
  {
    title: ELinkTitle.DEV_TO,
    category: ELinkCategory.BLOG,
    href: ELinkUrl.DEV_TO,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "dev",
    iconTitle: "Dev.to",
    description: Ei18nToken.DEV_TO,
  },
  {
    title: ELinkTitle.MEDIUM,
    category: ELinkCategory.BLOG,
    href: ELinkUrl.MEDIUM,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "medium",
    iconTitle: "Medium",
    description: Ei18nToken.MEDIUM,
  },
];

export const showcaseLinks: TLink<IPlatformLinkPartial>[] = [
  {
    title: ELinkTitle.CODEPEN,
    category: ELinkCategory.SHOWCASE,
    href: ELinkUrl.CODEPEN,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "codepen",
    iconTitle: "Codepen",
    description: Ei18nToken.CODEPEN,
  },
  {
    title: ELinkTitle.GLITCH,
    category: ELinkCategory.SHOWCASE,
    href: ELinkUrl.GLITCH,
    iconPrefix: EIconLibrary.CUSTOM,
    icon: "glitch",
    iconTitle: "Glitch",
    description: Ei18nToken.GLITCH,
  },
];
