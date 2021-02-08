export const CARD_DISPLAY_CHANGE = "CARD_DISPLAY_CHANGE";

interface CD_AT {
  type: typeof CARD_DISPLAY_CHANGE;
  payload: string;
}

export type AT = CD_AT;