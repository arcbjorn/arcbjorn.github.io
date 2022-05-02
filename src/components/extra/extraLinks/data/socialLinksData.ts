import { EIconLibrary } from "types";
import {
  ESocialLink,
  ESocialLinkTitle,
  TSocialLink,
} from "components/extra/extraLinks/types";

const links: TSocialLink[] = [
  {
    href: ESocialLink.TWITTER,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "twitter",
    iconTitle: ESocialLinkTitle.TWITTER,
  },
  {
    href: ESocialLink.REDDIT,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "reddit",
    iconTitle: ESocialLinkTitle.REDDIT,
  },
  {
    href: ESocialLink.INSTAGRAM,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "instagram",
    iconTitle: ESocialLinkTitle.INSTAGRAM,
  },
  {
    href: ESocialLink.SPOTIFY,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "spotify",
    iconTitle: ESocialLinkTitle.SPOTIFY,
  },
  {
    href: ESocialLink.GOOD_READS,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "goodreads",
    iconTitle: ESocialLinkTitle.GOOD_READS,
  },
];

export default links;
