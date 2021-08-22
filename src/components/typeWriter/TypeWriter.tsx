import React, { ReactNode } from "react";
import Typewriter from "typewriter-effect";

import IntroText from "./introText";

type TypeWriterProps = {
  toggleTypeWriter: () => undefined;
  startTypeWriter: boolean;
  children?: ReactNode;
};

export const TypeWriter: React.FunctionComponent<TypeWriterProps> = ({
  startTypeWriter,
  toggleTypeWriter,
}: TypeWriterProps) => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        if (startTypeWriter) {
          typewriter
            .typeString(IntroText)
            .callFunction(() => {
              toggleTypeWriter();
            })
            .start();
        } else {
          typewriter.pasteString(IntroText, null).start();
        }
      }}
      options={{
        delay: startTypeWriter ? "natural" : 0,
      }}
    />
  );
};

export default TypeWriter;
