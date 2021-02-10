// Action Types = aT
import produce from "immer";
import {
  AT,
  FILTER_REGION_ACTIVE,
  FILTER_REGION_DISABLE,
  FILTER_SET_ACTIVE,
  FILTER_SET_DISABLE,
  FILTER_MANA_DISABLE,
  FILTER_MANA_ACTIVE,
} from "../constants/filterConstants";

import { FilterStateTypes } from "../../typesProps";

const initialState: FilterStateTypes = {
  set: {
    active: false,
    value: [],
  },
  region: {
    active: false,
    value: [],
  },
  mana: {
    active: false,
    value: [],
  },
};

export default function filterReducer(
  state = initialState,
  action: AT
): FilterStateTypes {
  switch (action.type) {
    case FILTER_SET_ACTIVE:
      return produce(state, (draft) => {
        draft.set = {
          active: true,
          value: action.payload,
        };
      });
    case FILTER_SET_DISABLE:
      return produce(state, (draft) => {
        draft.set = {
          active: false,
          value: action.payload,
        };
      });
    case FILTER_REGION_ACTIVE:
      return produce(state, (draft) => {
        draft.region = {
          active: true,
          value: action.payload,
        };
      });
    case FILTER_REGION_DISABLE:
      return produce(state, (draft) => {
        draft.region = {
          active: true,
          value: action.payload,
        };
      });
    case FILTER_MANA_ACTIVE:
      return produce(state, (draft) => {
        draft.mana = {
          active: true,
          value: action.payload,
        };
      });
    case FILTER_MANA_DISABLE:
      return produce(state, (draft) => {
        draft.mana = {
          active: false,
          value: action.payload,
        };
      });
    default:
      return state;
  }
}
