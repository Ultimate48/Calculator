import React, { createContext, useState } from 'react';

export const EquationContext = createContext();

export const EquationProvider = ({ children }) => {
  const [equation, setEquation] = useState('');

  return (
    <EquationContext.Provider value={{ equation, setEquation }}>
      {children}
    </EquationContext.Provider>
  );
};