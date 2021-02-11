import {
  AT,
  FILTER_SET_ACTIVE,
  FILTER_SET_DISABLE,
  FILTER_REGION_ACTIVE,
  FILTER_REGION_DISABLE,
  FILTER_MANA_ACTIVE,
  FILTER_MANA_DISABLE,
  FILTER_TYPE_ACTIVE,
  FILTER_TYPE_DISABLE,
  FILTER_RARITY_ACTIVE,
  FILTER_RARITY_DISABLE,
  FILTER_KEYWORD_ACTIVE,
  FILTER_KEYWORD_DISABLE,
} from "../constants/filterConstants";

import { SelectTypes } from "../../typesProps";

export function filterSetAction(value: string[]): AT {
  return {
    type: value.length ? FILTER_SET_ACTIVE : FILTER_SET_DISABLE,
    payload: value,
  };
}

export function filterRegionAction(value: string[]): AT {
  return {
    type: value.length ? FILTER_REGION_ACTIVE : FILTER_REGION_DISABLE,
    payload: value,
  };
}

export function filterManaAction(value: number[]): AT {
  return {
    type: value.length ? FILTER_MANA_ACTIVE : FILTER_MANA_DISABLE,
    payload: value,
  };
}

export function filterTypeAction(value: string[]): AT {
  return {
    type: value.length ? FILTER_TYPE_ACTIVE : FILTER_TYPE_DISABLE,
    payload: value,
  };
}
export function filterRarityAction(value: string[]): AT {
  return {
    type: value.length ? FILTER_RARITY_ACTIVE : FILTER_RARITY_DISABLE,
    payload: value,
  };
}
export function filterKeywordAction(value: SelectTypes[]): AT {
  console.log("Filter_Action - Filter Keyword");
  console.log(value);
  return {
    type: value.length ? FILTER_KEYWORD_ACTIVE : FILTER_KEYWORD_DISABLE,
    payload: value,
  };
}
