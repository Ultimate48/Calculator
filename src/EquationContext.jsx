import React, { createContext, useState } from 'react';

export const EquationContext = createContext();

export const EquationProvider = ({ children }) => {
  const [equation, setEquation] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  return (
    <EquationContext.Provider value={{ equation, setEquation, darkMode, setDarkMode}}>
      {children}
    </EquationContext.Provider>
  );
};