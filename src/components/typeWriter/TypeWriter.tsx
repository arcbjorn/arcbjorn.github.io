import React, { ReactNode } from "react";
import Typewriter from "typewriter-effect";
import { connect } from "react-redux";

import { Action } from "state/types";
import IntroText from "./introText";

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
  return (
    <Typewriter
      onInit={(typewriter) => {
        if (startTypeWriter) {
          typewriter
            .typeString(IntroText)
            .callFunction(() => {
              toggleTypeWriter();
              toggleQuickLinksVisibility();
            })
            .start();
        } else {
          typewriter
            .pasteString(IntroText, null)
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
