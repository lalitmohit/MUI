// TitleContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a Context for the title
const TitleContext = createContext();

// Custom hook to use the TitleContext
export const useTitle = () => useContext(TitleContext);

// Provider component
export const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState('Application Title');
  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};
