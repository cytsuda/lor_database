import {
  AT,
  CARD_DISPLAY_CHANGE,
  CARD_COLLECTIBLE,
} from "../constants/displayConstants";

export function cardDisplayChange(value: string): AT {
  return {
    type: CARD_DISPLAY_CHANGE,
    payload: value,
  };
}

export function cardCollectibleChange(value: boolean): AT {
  return {
    type: CARD_COLLECTIBLE,
    payload: value,
  };
}
