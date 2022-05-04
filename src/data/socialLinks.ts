import { EIconLibrary } from "types";
import { ELinkUrl, TLink, ELinkCategory, ELinkTitle } from "data/types";

const links: TLink[] = [
  {
    href: ELinkUrl.TWITTER,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "twitter",
    iconTitle: ELinkTitle.TWITTER,
    category: ELinkCategory.SOCIAL,
  },
  {
    href: ELinkUrl.REDDIT,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "reddit",
    iconTitle: ELinkTitle.REDDIT,
    category: ELinkCategory.SOCIAL,
  },
  {
    href: ELinkUrl.INSTAGRAM,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "instagram",
    iconTitle: ELinkTitle.INSTAGRAM,
    category: ELinkCategory.SOCIAL,
  },
  {
    href: ELinkUrl.SPOTIFY,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "spotify",
    iconTitle: ELinkTitle.SPOTIFY,
    category: ELinkCategory.SOCIAL,
  },
  {
    href: ELinkUrl.GOOD_READS,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "goodreads",
    iconTitle: ELinkTitle.GOOD_READS,
    category: ELinkCategory.SOCIAL,
  },
];

export default links;
