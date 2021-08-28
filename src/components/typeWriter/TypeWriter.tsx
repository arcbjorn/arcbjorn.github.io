import React, { ReactNode } from "react";
import Typewriter from "typewriter-effect";
import { connect } from "react-redux";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { ETranslationKey } from "i18n/types";
import { Action } from "state/types";
import getTerminalText from "./introText";
import * as css from "./typeWriter.module.css";

type TypeWriterProps = {
  toggleQuickLinksVisibility: () => void;
  toggleTypeWriter: () => void;
  startTypeWriter: boolean;
  children?: ReactNode;
};

const TypeWriter: React.FunctionComponent<TypeWriterProps> = ({
  startTypeWriter,
  toggleTypeWriter,
  toggleQuickLinksVisibility,
}: TypeWriterProps) => {
  const { t } = useTranslation();
  const introText = getTerminalText({
    greeting: t(ETranslationKey.GREETING),
    position: t(ETranslationKey.POSITION),
    previously: t(ETranslationKey.PREVIOUSLY),
    extra: t(ETranslationKey.EXTRA),
  });

  return (
    <div className={css.typeWriter}>
      <Typewriter
        onInit={(typewriter) => {
          if (startTypeWriter) {
            typewriter
              .typeString(introText)
              .callFunction(() => {
                toggleTypeWriter();
                toggleQuickLinksVisibility();
              })
              .start();
          } else {
            typewriter
              .pasteString(introText, null)
              .callFunction(() => {
                toggleQuickLinksVisibility();
              })
              .start();
          }
        }}
        options={{
          delay: startTypeWriter ? 60 : 0,
        }}
      />
    </div>
  );
};

const mapStateToProps = ({ startTypeWriter }: any) => {
  return { startTypeWriter };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleTypeWriter: () => dispatch({ type: Action.ToggleTypeWriter }),
  };
};

// To prevent typewriter animation on redux props change
const NonReactiveTypeWriter = React.memo(TypeWriter, (props, nextProps) => {
  return !nextProps.startTypeWriter;
});

const ConnectedTypeWriter = connect(
  mapStateToProps,
  mapDispatchToProps
)(NonReactiveTypeWriter);

export default ConnectedTypeWriter;
