import { TQuickLink, EQuickLinkTitle, EIconLibrary } from "./types";

const mailTo =
  "mailto:oleg.luganskiy@gmail.com?subject=Employment%20Offer&body=Hi%20Oleg";

const links: TQuickLink[] = [
  {
    title: EQuickLinkTitle.LINKEDIN,
    href: "https://www.linkedin.com/in/oleg-luganskiy/",
    iconPrefix: EIconLibrary.BRANDS,
    icon: "linkedin",
    iconTitle: "LinkedIn account",
  },
  {
    title: EQuickLinkTitle.GITHUB,
    href: "https://www.github.com/arcbjorn",
    iconPrefix: EIconLibrary.BRANDS,
    icon: "github",
    iconTitle: "Github account",
  },
  {
    title: EQuickLinkTitle.MAIL,
    href: mailTo,
    iconPrefix: EIconLibrary.MATERIAL,
    icon: "mail",
    iconTitle: "Email address",
  },
  {
    title: EQuickLinkTitle.CV,
    href: "OL.CV.pdf",
    iconPrefix: EIconLibrary.MATERIAL,
    icon: "description",
    iconTitle: "Curriculum Vitae",
  },
];

export default links;
