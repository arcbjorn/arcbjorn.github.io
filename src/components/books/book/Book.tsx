import * as React from "react";

import { TBook } from "../types";

import * as css from "./book.module.css";

type BookProps = Omit<TBook, "category"> & {
  children?: React.ReactNode;
};

const Book: React.FunctionComponent<BookProps> = ({ title, author, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={css.book}
    >
      <span className={css.bookTitle}>{`"${title}"`}</span>
      <span>{author}</span>
    </a>
  );
};

export default Book;
