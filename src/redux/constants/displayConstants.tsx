export const CARD_DISPLAY_CHANGE = "CARD_DISPLAY_CHANGE";
export const CARD_COLLECTIBLE = "CARD_COLLECTIBLE";

interface CD_AT {
  type: typeof CARD_DISPLAY_CHANGE;
  payload: string;
}

interface CC_AT {
  type: typeof CARD_COLLECTIBLE;
  payload: boolean;
}

export type AT = CD_AT | CC_AT;
