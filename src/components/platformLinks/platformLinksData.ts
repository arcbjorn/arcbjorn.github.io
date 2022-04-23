import { EIconLibrary } from "types";
import {
  EPlatformLink,
  TPlatformLink,
  EPlatformLinkTitle,
} from "components/platformLinks/types";
import { Ei18nToken } from "i18n/types";

const links: TPlatformLink[] = [
  {
    title: EPlatformLinkTitle.CODEPEN,
    href: EPlatformLink.CODEPEN,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "codepen",
    iconTitle: "Codepen",
    description: Ei18nToken.CODEPEN,
  },
  {
    title: EPlatformLinkTitle.HACKER_RANK,
    href: EPlatformLink.HACKER_RANK,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "hackerrank",
    iconTitle: "Hacker Rank",
    description: Ei18nToken.HACKER_RANK,
  },
  {
    title: EPlatformLinkTitle.LEETCODE,
    href: EPlatformLink.LEETCODE,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "leetcode",
    iconTitle: "LeetCode",
    description: Ei18nToken.LEETCODE,
  },
  {
    title: EPlatformLinkTitle.STEPIK,
    href: EPlatformLink.STEPIK,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "stepik",
    iconTitle: "Stepik",
    description: Ei18nToken.STEPIK,
  },
  {
    title: EPlatformLinkTitle.DEV_TO,
    href: EPlatformLink.DEV_TO,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "dev",
    iconTitle: "Dev.to",
    description: Ei18nToken.DEV_TO,
  },
  {
    title: EPlatformLinkTitle.FREE_CODE_CAMP,
    href: EPlatformLink.FREE_CODE_CAMP,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "free-code-camp",
    iconTitle: "freeCodeCamp",
    description: Ei18nToken.FREE_CODE_CAMP,
  },
  {
    title: EPlatformLinkTitle.GLITCH,
    href: EPlatformLink.GLITCH,
    iconPrefix: EIconLibrary.CUSTOM,
    icon: "glitch",
    iconTitle: "Glitch",
    description: Ei18nToken.GLITCH,
  },
  {
    title: EPlatformLinkTitle.MY_TRAVEL_MAP,
    href: EPlatformLink.MY_TRAVEL_MAP,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "galactic-republic",
    iconTitle: "My travel map",
    description: Ei18nToken.MY_TRAVEL_MAP,
  },
];

export default links;
