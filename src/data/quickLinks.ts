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
    title: ELinkTitle.EMAIL,
    href: ELinkUrl.MAIL,
    iconPrefix: EIconLibrary.MATERIAL,
    icon: "mail",
    iconTitle: "Email address",
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
