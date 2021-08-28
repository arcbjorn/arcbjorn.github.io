import { TQuickLink, EQuickLinkTitle } from "components/quickLinks/types";

const mailTo =
  "mailto:oleg.luganskiy@gmail.com?subject=Employment%20Offer&body=Hi%20Oleg";

const links: TQuickLink[] = [
  {
    title: EQuickLinkTitle.LINKEDIN,
    href: "https://www.linkedin.com/in/oleg-luganskiy/",
    iconPrefix: "fab",
    icon: "linkedin",
    iconTitle: "LinkedIn account",
  },
  {
    title: EQuickLinkTitle.GITHUB,
    href: "https://www.github.com/arcbjorn",
    iconPrefix: "fab",
    icon: "github",
    iconTitle: "Github account",
  },
  {
    title: EQuickLinkTitle.MAIL,
    href: mailTo,
    iconPrefix: "far",
    icon: "envelope",
    iconTitle: "Email address",
  },
  {
    title: EQuickLinkTitle.RESUME,
    href: "OL.CV.pdf",
    iconPrefix: "far",
    icon: "file-alt",
    iconTitle: "Resume",
  },
];

export default links;
