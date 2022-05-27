import * as React from "react";

import { TBook } from "components/extra/books/types";

import * as css from "components/extra/books/book/book.module.css";

type TBookProps = Omit<TBook, "category"> & {
  children?: React.ReactNode;
};

const Book: React.FunctionComponent<TBookProps> = ({ title, author, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={css.book}
    >
      <span>{`"${title}"`}</span>
      <span>{author}</span>
    </a>
  );
};

export default Book;
