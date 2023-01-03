export enum EBookCategory {
  SOFTWARE = "Software",
  PSYCHOLOGY = "Psychology",
  FANTASY = "Fantasy",
}

export type TBook = {
  author: string;
  title: string;
  category: EBookCategory;
  href: string;
};
