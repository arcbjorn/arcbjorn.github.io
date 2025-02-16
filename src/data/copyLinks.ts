import { Ei18nToken } from "i18n/types";
import { EIconLibrary } from "types";
import { TLink, ELinkTitle, ELinkUrl } from "data/types";

const links: TLink[] = [
  {
    title: ELinkTitle.LINKEDIN,
    href: ELinkUrl.LINKEDIN,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "linkedin",
    iconTitle: "LinkedIn account",
  },
  {
    title: ELinkTitle.GITHUB,
    href: ELinkUrl.GITHUB,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "github",
    iconTitle: "Github account",
  },
  {
    title: ELinkTitle.TWITTER,
    href: ELinkUrl.TWITTER,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "twitter",
    iconTitle: "Twitter account",
  },
  {
    title: ELinkTitle.EMAIL,
    href: ELinkUrl.COPY_MAIL,
    iconPrefix: EIconLibrary.MATERIAL,
    icon: "mail",
    iconTitle: "Email address",
  },
  {
    title: "Portfolio",
    href: ELinkUrl.PORTFOLIO,
    iconPrefix: EIconLibrary.MATERIAL,
    icon: "description",
    iconTitle: "Portfolio",
  },
  {
    title: Ei18nToken.CV,
    href: ELinkUrl.CV,
    iconPrefix: EIconLibrary.MATERIAL,
    icon: "description",
    iconTitle: "Curriculum Vitae",
  },
];

export default links;
