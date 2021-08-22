import React from "react";
import Typewriter from "typewriter-effect";
// import * as css from "./typeWriter.module.css";

export const Header: React.FunctionComponent = () => {
  let start = true;

  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("Hello World!")
          .callFunction(() => {
            console.log("String typed out!");
          })
          .pauseFor(2500)
          .deleteAll()
          .callFunction(() => {
            start = false;
          })
          .start();
      }}
      options={{
        autoStart: start,
      }}
    />
  );
};

export default Header;
