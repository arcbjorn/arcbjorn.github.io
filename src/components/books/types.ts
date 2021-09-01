export enum EBookCategory {
  SOFTWARE = "Software",
  OTHER = "Other",
}

export type TBook = {
  author: string;
  title: string;
  category: EBookCategory;
  href: string;
};
