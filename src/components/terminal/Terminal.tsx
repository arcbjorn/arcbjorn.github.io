import React from "react";
import { connect } from "react-redux";

import TypeWriter from "components/typeWriter/TypeWriter";
import { Action } from "state/types";

import * as css from "./terminal.module.css";

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

export const Terminal: React.FunctionComponent = () => {
  return (
    <div className={css.terminal}>
      <div className={css.window}>
        <ConnectedTypeWriter />
      </div>
    </div>
  );
};

export default Terminal;
