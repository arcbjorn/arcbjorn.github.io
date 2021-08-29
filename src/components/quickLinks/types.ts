export enum EQuickLinkTitle {
  LINKEDIN = "LinkedIn",
  GITHUB = "Github",
  MAIL = "Mail",
  CV = "cv",
}

export enum EIconLibrary {
  BRANDS = "fab",
  MATERIAL = "material",
}

export type TQuickLink = {
  title: EQuickLinkTitle;
  href: string;
  icon: string;
  iconPrefix: EIconLibrary;
  iconTitle: string;
};
