export const FILTER_SET_ACTIVE = "FILTER_SET_ACTIVE";
export const FILTER_SET_DISABLE = "FILTER_SET_DISABLE";

export const FILTER_REGION_ACTIVE = "FILTER_REGION_ACTIVE";
export const FILTER_REGION_DISABLE = "FILTER_REGION_DISABLE";

export const FILTER_MANA_ACTIVE = "FILTER_MANA_ACTIVE";
export const FILTER_MANA_DISABLE = "FILTER_MANA_DISABLE";

export const FILTER_TYPE_ACTIVE = "FILTER_TYPE_ACTIVE";
export const FILTER_TYPE_DISABLE = "FILTER_TYPE_DISABLE";

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

interface FilterMana_AT {
  type: typeof FILTER_MANA_ACTIVE | typeof FILTER_MANA_DISABLE;
  payload: number[];
}

export type AT = FilterSet_AT | FilterRegion_AT | FilterType_AT | FilterMana_AT;
