import { SelectTypes } from "../../typesProps";

export const FILTER_SET_ACTIVE = "FILTER_SET_ACTIVE";
export const FILTER_SET_DISABLE = "FILTER_SET_DISABLE";

export const FILTER_REGION_ACTIVE = "FILTER_REGION_ACTIVE";
export const FILTER_REGION_DISABLE = "FILTER_REGION_DISABLE";

export const FILTER_MANA_ACTIVE = "FILTER_MANA_ACTIVE";
export const FILTER_MANA_DISABLE = "FILTER_MANA_DISABLE";

export const FILTER_TYPE_ACTIVE = "FILTER_TYPE_ACTIVE";
export const FILTER_TYPE_DISABLE = "FILTER_TYPE_DISABLE";

export const FILTER_RARITY_ACTIVE = "FILTER_RARITY_ACTIVE";
export const FILTER_RARITY_DISABLE = "FILTER_RARITY_DISABLE";

export const FILTER_KEYWORD_ACTIVE = "FILTER_KEYWORD_ACTIVE";
export const FILTER_KEYWORD_DISABLE = "FILTER_KEYWORD_DISABLE";

interface FilterSet_AT {
  type: typeof FILTER_SET_ACTIVE | typeof FILTER_SET_DISABLE;
  payload: string[];
}

interface FilterRegion_AT {
  type: typeof FILTER_REGION_ACTIVE | typeof FILTER_REGION_DISABLE;
  payload: string[];
}

interface FilterType_AT {
  type: typeof FILTER_TYPE_ACTIVE | typeof FILTER_TYPE_DISABLE;
  payload: string[];
}

interface FilterRarity_AT {
  type: typeof FILTER_RARITY_ACTIVE | typeof FILTER_RARITY_DISABLE;
  payload: string[];
}

interface FilterMana_AT {
  type: typeof FILTER_MANA_ACTIVE | typeof FILTER_MANA_DISABLE;
  payload: number[];
}

interface FilterKeyword_AT {
  type: typeof FILTER_KEYWORD_ACTIVE | typeof FILTER_KEYWORD_DISABLE;
  payload: SelectTypes[];
}

export type AT =
  | FilterKeyword_AT
  | FilterSet_AT
  | FilterRegion_AT
  | FilterType_AT
  | FilterRarity_AT
  | FilterMana_AT
  | FilterKeyword_AT;
