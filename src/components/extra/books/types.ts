export enum EBookCategory {
  SOFTWARE = "Software",
  PSYCHOLOGY = "Psychology",
}

export type TBook = {
  author: string;
  title: string;
  category: EBookCategory;
  href: string;
};
