import { ReactNodeArray } from "react";

type customNode = {
  type?: {
    name: string;
  };
};

export function isExtraInfoPage(nodes: ReactNodeArray): boolean {
  if (nodes.length) {
    if (nodes.some((node) => (node as customNode).type?.name === "ExtraInfo")) {
      return true;
    }
  }

  return false;
}
