import React, { ReactNode } from "react";
import Typewriter from "typewriter-effect";
import { connect } from "react-redux";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { Ei18nToken } from "i18n/types";
import { Action } from "state/types";
import getTerminalText from "components/typeWriter/introText";
import * as css from "components/typeWriter/typeWriter.module.css";

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
    file: t(Ei18nToken.FILE),
    greeting: t(Ei18nToken.GREETING),
    position: t(Ei18nToken.POSITION),
    formerly: t(Ei18nToken.FORMERLY),
    interests: t(Ei18nToken.INTERESTS),
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
