import { Ei18nToken } from "i18n/types";
import { EIconLibrary } from "types";

export enum EQuickLinkTitle {
  LINKEDIN = "LinkedIn",
  GITHUB = "Github",
  EMAIL = "EMail",
}

export type TQuickLink = {
  title: EQuickLinkTitle | Ei18nToken;
  href: string;
  icon: string;
  iconPrefix: EIconLibrary;
  iconTitle: string;
};
