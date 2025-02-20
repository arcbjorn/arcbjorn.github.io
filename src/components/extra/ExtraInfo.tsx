import React, { useEffect, useState } from "react";

import Books from "components/extra/books/Books";
import Loader from "components/loader/Loader";
import ExtraLinks from "components/extra/extraLinks/ExtraLinks";

import * as css from "components/extra/extraInfo.module.css";
import Languages from "./languages/Languages";
import { Trans } from "react-i18next";
import { Ei18nToken } from "i18n/types";

const ExtraInfo: React.FunctionComponent = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={css.extraInfo}>
          <div className={`${css.extraSection} w-full sm:w-5/12`}>
            <ExtraLinks />
            <a
              href="https://arcbjorn.bio.link"
              target="_blank"
              rel="noopener noreferrer"
              className="underline p-4 self-center text-center"
            >
              <Trans>{Ei18nToken.ALL_SOCIALS}</Trans>
            </a>
            <Languages />
          </div>
          <div className={`${css.extraSection} w-full sm:w-7/12`}>
            <Books />
          </div>
        </div>
      )}
    </>
  );
};

export default ExtraInfo;
