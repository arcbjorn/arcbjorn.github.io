import { EIconLibrary } from "types";
import { ELinkUrl, TLink, IPlatformLinkPartial, ELinkTitle } from "data/types";
import { Ei18nToken } from "i18n/types";

export const platformLinks: TLink<IPlatformLinkPartial>[] = [
  {
    title: Ei18nToken.MY_TRAVEL_MAP_TITLE,
    href: ELinkUrl.MY_TRAVEL_MAP,
    iconPrefix: EIconLibrary.SOLID,
    icon: "earth-americas",
    iconTitle: "My travel map",
  },
  {
    title: ELinkTitle.LEETCODE,
    href: ELinkUrl.LEETCODE,
    iconPrefix: EIconLibrary.SOLID,
    icon: "terminal",
    iconTitle: "LeetCode",
  },
  {
    title: Ei18nToken.BLOG_TITLE,
    href: ELinkUrl.BLOG,
    iconPrefix: EIconLibrary.SOLID,
    icon: "book",
    iconTitle: "Blog",
  },
];
