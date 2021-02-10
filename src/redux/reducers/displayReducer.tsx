import produce from "immer";

// Action Types = AT
import {AT,CARD_DISPLAY_CHANGE, CARD_COLLECTIBLE } from "../constants/displayConstants";

import { DisplayStateTypes } from "../../typesProps";

const initialState: DisplayStateTypes = {
  cardDisplay: "smallGrid",
  collectible: false,
};

export default function displayReducer(
  state = initialState,
  action: AT
): DisplayStateTypes {
  switch (action.type) {
    case CARD_DISPLAY_CHANGE:
      return produce(state, (draft) => {
        draft.cardDisplay = action.payload;
      });
    case CARD_COLLECTIBLE:
      return produce(state, draft => {
        draft.collectible = action.payload
      });
    default:
      return state;
  }
}
