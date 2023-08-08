import React, { useState } from "react";
import { UserContext } from "./UserContext";
import { Keyword } from "./SearchContext";
import { SearchContext } from "./SearchContext";
interface Props {
  children: React.ReactNode;
}

const SearchProvider: React.FC<Props> = ({ children }) => {
  const [keyWord, setKeywordContext] = useState<string>("");

  return (
    <SearchContext.Provider value={{ keyWord, setKeywordContext }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
