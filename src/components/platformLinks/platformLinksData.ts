import { EIconLibrary } from "pages/types";
import {
  TPlatformLink,
  EPlatformLinkTitle,
  EPlatformLinkDescriptionTranslationKey,
} from "./types";

const links: TPlatformLink[] = [
  {
    title: EPlatformLinkTitle.CODEPEN,
    href: "https://www.linkedin.com/in/oleg-luganskiy/",
    iconPrefix: EIconLibrary.BRANDS,
    icon: "codepen",
    iconTitle: "Codepen",
    description: EPlatformLinkDescriptionTranslationKey.CODEPEN,
  },
  {
    title: EPlatformLinkTitle.HACKER_RANK,
    href: "https://www.linkedin.com/in/oleg-luganskiy/",
    iconPrefix: EIconLibrary.BRANDS,
    icon: "hackerrank",
    iconTitle: "Hacker Rank",
    description: EPlatformLinkDescriptionTranslationKey.HACKER_RANK,
  },
  {
    title: EPlatformLinkTitle.DEV_TO,
    href: "https://www.linkedin.com/in/oleg-luganskiy/",
    iconPrefix: EIconLibrary.BRANDS,
    icon: "dev",
    iconTitle: "Dev.to",
    description: EPlatformLinkDescriptionTranslationKey.DEV_TO,
  },
  {
    title: EPlatformLinkTitle.FREE_CODE_CAMP,
    href: "https://www.linkedin.com/in/oleg-luganskiy/",
    iconPrefix: EIconLibrary.BRANDS,
    icon: "free-code-camp",
    iconTitle: "freeCodeCamp",
    description: EPlatformLinkDescriptionTranslationKey.FREE_CODE_CAMP,
  },
  {
    title: EPlatformLinkTitle.GLITCH,
    href: "https://www.linkedin.com/in/oleg-luganskiy/",
    iconPrefix: EIconLibrary.CUSTOM,
    icon: "glitch",
    iconTitle: "Glitch",
    description: EPlatformLinkDescriptionTranslationKey.GLITCH,
  },
  {
    title: EPlatformLinkTitle.MY_TRAVEL_MAP,
    href: "https://www.github.com/arcbjorn",
    iconPrefix: EIconLibrary.BRANDS,
    icon: "galactic-republic",
    iconTitle: "My travel map",
    description: EPlatformLinkDescriptionTranslationKey.MY_TRAVEL_MAP,
  },
];

export default links;
