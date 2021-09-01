import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import { EBookCategory } from "./types";
import { ETranslationKey } from "i18n/types";
import {
  extraSectionTitle,
  extraInnerSection,
} from "components/extraInfo/extraInfo.module.css";

import books from "./booksData";
import Book from "./book/Book";

import * as css from "./books.module.css";

const Books: React.FunctionComponent = () => {
  const softwareBooks = books.filter(
    ({ category }) => category === EBookCategory.SOFTWARE
  );

  const otherBooks = books.filter(
    ({ category }) => category === EBookCategory.OTHER
  );

  return (
    <fieldset className={extraInnerSection}>
      <legend className={extraSectionTitle}>
        <Trans>{ETranslationKey.BOOKS_TITLE}</Trans>
      </legend>
      <div className={css.books}>
        <span className={css.categoryTitle}>
          <Trans>{EBookCategory.SOFTWARE}</Trans>
        </span>
        {softwareBooks.map(({ title, author, href }, i) => (
          <div key={i} className={css.bookEntry}>
            <svg width="70" height="50" className={css.treeNode}>
              <line
                x1="30"
                y1="25"
                x2="60"
                y2="25"
                stroke="current"
                strokeWidth="3"
              />
              <line
                x1="30"
                y1="0"
                x2="30"
                y2="50"
                stroke="current"
                strokeWidth="3"
              />
            </svg>
            <Book title={title} author={author} href={href} />
          </div>
        ))}
        <span className={css.categoryTitle}>
          <Trans>{EBookCategory.OTHER}</Trans>
        </span>
        {otherBooks.map(({ title, author, href }, i) => (
          <div key={i} className={css.bookEntry}>
            <svg width="70" height="50" className={css.treeNode}>
              <line
                x1="30"
                y1="25"
                x2="60"
                y2="25"
                stroke="current"
                strokeWidth="3"
              />
              <line
                x1="30"
                y1="0"
                x2="30"
                y2="50"
                stroke="current"
                strokeWidth="3"
              />
            </svg>
            <Book title={title} author={author} href={href} />
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default Books;
