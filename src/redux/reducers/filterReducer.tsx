// Action Types = aT
import produce from "immer";
import { AT, CARD_DISPLAY_CHANGE } from "../constants/filterConstants";

import { FilterStateTypes } from "../../typesProps";

const initialState: FilterStateTypes = {
  cardDisplay: "smallGrid",
};

export function filterReducer(
  state = initialState,
  action: AT
): FilterStateTypes {
  switch (action.type) {
    case CARD_DISPLAY_CHANGE:
      return produce(state, (draft) => {
        draft.cardDisplay = action.payload;
      });
    default:
      return state;
  }
}
