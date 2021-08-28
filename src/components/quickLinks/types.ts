export enum EQuickLinkTitle {
  LINKEDIN = "LinkedIn",
  GITHUB = "Github",
  MAIL = "Mail",
  RESUME = "Resume",
}

export type TQuickLink = {
  title: EQuickLinkTitle;
  href: string;
  icon: string;
  iconPrefix: string;
  iconTitle: string;
};
