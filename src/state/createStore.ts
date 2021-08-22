import { createStore as reduxCreateStore, Store } from "redux";

import { Action, State } from "state/types";

const reducer = (state: any, action: any) => {
  if (action.type === Action.ToggleTypeWriter) {
    return Object.assign({}, state, {
      startTypeWriter: !state.startTypeWriter,
    });
  }
  return state;
};

const initialState: State = { startTypeWriter: true };

const createStore = (): Store => reduxCreateStore(reducer, initialState);
export default createStore;
