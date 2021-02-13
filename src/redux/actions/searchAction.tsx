import { AT, SEARCH_INPUT } from "../constants/searchConstants";

export function searchAction(value: string): AT {
  return {
    type: SEARCH_INPUT,
    payload: value,
  };
}
