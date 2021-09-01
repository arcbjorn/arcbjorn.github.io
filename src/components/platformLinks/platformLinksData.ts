import { EIconLibrary } from "pages/types";
import {
  EPlatformLink,
  TPlatformLink,
  EPlatformLinkTitle,
  EPlatformLinkDescriptionTranslationKey,
} from "./types";

const links: TPlatformLink[] = [
  {
    title: EPlatformLinkTitle.CODEPEN,
    href: EPlatformLink.CODEPEN,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "codepen",
    iconTitle: "Codepen",
    description: EPlatformLinkDescriptionTranslationKey.CODEPEN,
  },
  {
    title: EPlatformLinkTitle.HACKER_RANK,
    href: EPlatformLink.HACKER_RANK,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "hackerrank",
    iconTitle: "Hacker Rank",
    description: EPlatformLinkDescriptionTranslationKey.HACKER_RANK,
  },
  {
    title: EPlatformLinkTitle.DEV_TO,
    href: EPlatformLink.DEV_TO,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "dev",
    iconTitle: "Dev.to",
    description: EPlatformLinkDescriptionTranslationKey.DEV_TO,
  },
  {
    title: EPlatformLinkTitle.FREE_CODE_CAMP,
    href: EPlatformLink.FREE_CODE_CAMP,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "free-code-camp",
    iconTitle: "freeCodeCamp",
    description: EPlatformLinkDescriptionTranslationKey.FREE_CODE_CAMP,
  },
  {
    title: EPlatformLinkTitle.GLITCH,
    href: EPlatformLink.GLITCH,
    iconPrefix: EIconLibrary.CUSTOM,
    icon: "glitch",
    iconTitle: "Glitch",
    description: EPlatformLinkDescriptionTranslationKey.GLITCH,
  },
  {
    title: EPlatformLinkTitle.MY_TRAVEL_MAP,
    href: EPlatformLink.MY_TRAVEL_MAP,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "galactic-republic",
    iconTitle: "My travel map",
    description: EPlatformLinkDescriptionTranslationKey.MY_TRAVEL_MAP,
  },
];

export default links;
