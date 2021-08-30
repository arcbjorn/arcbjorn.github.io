import { EIconLibrary } from "pages/types";

export enum EQuickLinkTitle {
  LINKEDIN = "LinkedIn",
  GITHUB = "Github",
  MAIL = "Mail",
  CV = "cv",
}

export type TQuickLink = {
  title: EQuickLinkTitle;
  href: string;
  icon: string;
  iconPrefix: EIconLibrary;
  iconTitle: string;
};
