import * as React from "react";
import { Trans } from "react-i18next";

import { ETranslationKey } from "i18n/types";

import * as css from "./platformLinks.module.css";
import { extraSectionTitle } from "components/extraInfo/extraInfo.module.css";

const PlatformLinks: React.FunctionComponent = () => {
  return (
    <div className={css.platformLinks}>
      <div className={extraSectionTitle}>
        <Trans>{ETranslationKey.PLATFORMS_TITLE}</Trans>
      </div>
    </div>
  );
};

export default PlatformLinks;
