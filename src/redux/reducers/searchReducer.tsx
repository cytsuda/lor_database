// import produce from "immer"
import { AT, SEARCH_INPUT } from "../constants/searchConstants";

export default function searchReducer(
  state = "",
  action: AT
): string {
  switch (action.type) {
    case SEARCH_INPUT:
      return action.payload;
    default:
      return state;
  }
}
// Argument of type
// '{ search: { value: string; }; display: { cardDisplay: string; collectible: boolean; }; filter: { set: { active: boolean; value: never[]; }; region: { active: boolean; value: never[]; }; mana: { active: boolean; value: never[]; }; type: { ...; }; rarity: { ...; }; keyword: { ...; }; }; }' is not assignable to parameter of type
// '{ search?: undefined; filter?: undefined; display?: undefined; }'.
//   Types of property 'search' are incompatible.
//     Type '{ value: string; }' is not assignable to type 'undefined'.
