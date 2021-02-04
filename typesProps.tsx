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
  assets: TypeCardAssets[];
}