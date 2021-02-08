import { AT, CARD_DISPLAY_CHANGE } from "../constants/filterConstants";

export function cardDisplayChange(value: string): AT {
  return {
    type: CARD_DISPLAY_CHANGE,
    payload: value,
  };
}
