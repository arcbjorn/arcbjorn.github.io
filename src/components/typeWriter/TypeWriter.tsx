import React, { ReactNode } from "react";
import Typewriter from "typewriter-effect";
// import * as css from "./typeWriter.module.css";

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
            .typeString("Hello World!")
            .callFunction(() => {
              toggleTypeWriter();
            })
            .start();
        } else {
          typewriter.pasteString("Hello World!", null).start();
        }
      }}
      options={{
        delay: startTypeWriter ? "natural" : 0,
      }}
    />
  );
};

export default TypeWriter;
