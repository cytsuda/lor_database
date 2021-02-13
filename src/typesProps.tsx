interface TypeCardAssets {
  gameAbsolutePath: string;
  fullAbsolutePath: string;
}

export interface TypeCard {
  artistName: string;
  cardCode: string;
  associatedCardRefs: string[];
  associatedCards: string[];
  attack: number;
  collectible: boolean;
  cost: number;
  description: string;
  descriptionNew: string;
  descriptionRaw: string;
  flavorText: string;
  health: number;
  keywordRefs: string[];
  keywords: string[];
  levelupDescription: string;
  levelupDescriptionNew: string;
  levelupDescriptionRaw: string;
  name: string;
  rarity: string;
  rarityRef: string;
  region: string;
  regionRef: string;
  set: string;
  spellSpeed: string;
  spellSpeedRef: string;
  subtype: string;
  subtypes: string[];
  supertype: string;
  type: string;
  typeRef: string;
  typeRaw: string;
  assets: TypeCardAssets[];
}

export interface reduxState {
  display: DisplayStateTypes;
  filter: FilterStateTypes;
  search: string;
}
export interface DisplayStateTypes {
  cardDisplay: string;
  collectible: boolean;
}

export interface FilterStringTypes {
  active: boolean;
  value: string[];
}

export interface FilterNumberTypes {
  active: boolean;
  value: number[];
}

export interface SelectTypes {
  label: string;
  value: string;
}

export interface FilterKeywordTypes {
  active: boolean;
  value: SelectTypes[];
}

export interface FilterStateTypes {
  set: FilterStringTypes;
  region: FilterStringTypes;
  mana: FilterNumberTypes;
  type: FilterStringTypes;
  rarity: FilterStringTypes;
  keyword: FilterKeywordTypes;
}

export interface InfoDataType {
  icon?: string;
  name: string;
  nameRef: string;
  description?: string;
  abbreviation?: string;
  iconAbsolutePath?: string;
}
