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
} from "../constants/filterConstants";

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
