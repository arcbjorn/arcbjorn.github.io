import { Ei18nToken } from "i18n/types";
import { EIconLibrary } from "types";
import { TLink, ELinkTitle, ELinkUrl, ELinkCategory } from "data/types";

const links: TLink[] = [
  {
    title: ELinkTitle.LINKEDIN,
    href: ELinkUrl.LINKEDIN,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "linkedin",
    iconTitle: "LinkedIn account",
    category: ELinkCategory.SOCIAL,
  },
  {
    title: ELinkTitle.GITHUB,
    href: ELinkUrl.GITHUB,
    iconPrefix: EIconLibrary.BRANDS,
    icon: "github",
    iconTitle: "Github account",
    category: ELinkCategory.CUSTOM,
  },
  {
    title: ELinkTitle.EMAIL,
    href: ELinkUrl.MAIL,
    iconPrefix: EIconLibrary.MATERIAL,
    icon: "mail",
    iconTitle: "Email address",
    category: ELinkCategory.CUSTOM,
  },
  {
    title: Ei18nToken.CV,
    href: ELinkUrl.CV,
    iconPrefix: EIconLibrary.MATERIAL,
    icon: "description",
    iconTitle: "Curriculum Vitae",
    category: ELinkCategory.CUSTOM,
  },
];

export default links;
