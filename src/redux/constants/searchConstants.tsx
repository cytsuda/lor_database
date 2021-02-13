export const SEARCH_INPUT = "SEARCH_INPUT";

interface SI_AT {
  type: typeof SEARCH_INPUT;
  payload: string;
}

export type AT = SI_AT;
