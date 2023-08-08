import { createContext, useState } from "react";
export interface Keyword {
  keyWord: string;
  setKeywordContext: (keyword: string) => void;
}

export const SearchContext = createContext<Keyword>({
  keyWord: "",
  setKeywordContext: () => {},
});
