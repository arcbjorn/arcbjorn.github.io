import { EIconLibrary } from "types";
import { ELinkUrl, TLink, ELinkTitle } from "data/types";

const links: TLink[] = [
  {
    href: ELinkUrl.TWITTER,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "twitter",
    iconTitle: ELinkTitle.TWITTER,
  },
  {
    href: ELinkUrl.REDDIT,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "reddit",
    iconTitle: ELinkTitle.REDDIT,
  },
  {
    href: ELinkUrl.INSTAGRAM,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "instagram",
    iconTitle: ELinkTitle.INSTAGRAM,
  },
  {
    href: ELinkUrl.SPOTIFY,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "spotify",
    iconTitle: ELinkTitle.SPOTIFY,
  },
  {
    href: ELinkUrl.GOOD_READS,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "goodreads",
    iconTitle: ELinkTitle.GOOD_READS,
  },
];

export default links;
