import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import { EBookCategory } from "components/extra/books/types";
import { Ei18nToken } from "i18n/types";
import {
  extraSectionTitle,
  extraInnerSection,
} from "components/extra/extraInfo.module.css";

import books from "data/booksData";
import Book from "components/extra/books/book/Book";

import * as css from "components/extra/books/books.module.css";

const categoryToI18nTokenMap: Record<EBookCategory, Ei18nToken> = {
  [EBookCategory.SOFTWARE]: Ei18nToken.SOFTWARE,
  [EBookCategory.PSYCHOLOGY]: Ei18nToken.PSYCHOLOGY,
  [EBookCategory.FANTASY]: Ei18nToken.FANTASY,
};

const categoriesList: EBookCategory[] = [
  EBookCategory.SOFTWARE,
  EBookCategory.PSYCHOLOGY,
  EBookCategory.FANTASY,
];

const Books: React.FunctionComponent = () => {
  return (
    <fieldset className={extraInnerSection}>
      <legend className={extraSectionTitle}>
        <Trans>{Ei18nToken.BOOKS_TITLE}</Trans>
      </legend>
      <div className={css.books}>
        {categoriesList.map((option) => (
          <>
            <span className={css.categoryTitle}>
              <Trans>{categoryToI18nTokenMap[option]}</Trans>
            </span>
            <div className={css.bookList}>
              {books
                .filter(({ category }) => category === option)
                .map(({ title, author, href }, i) => (
                  <div key={title + i} className={css.bookEntry}>
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
          </>
        ))}
      </div>
    </fieldset>
  );
};

export default Books;
