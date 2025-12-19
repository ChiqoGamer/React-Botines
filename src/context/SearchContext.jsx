import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false);

  const triggerSearch = (term) => {
    setSearchTerm(term);
    setSearchTriggered(true); // 🔥 avisa que es una búsqueda nueva
  };

  const resetSearchTrigger = () => {
    setSearchTriggered(false);
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        triggerSearch,
        searchTriggered,
        resetSearchTrigger
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
