import React, { createContext, useState, useContext } from 'react';

const CotizacionContext = createContext();

export function CotizacionProvider({ children }) {
  const [cotizaciones, setCotizaciones] = useState([]);
  
  const addCotizacion = (cotizacion) => {
    setCotizaciones([...cotizaciones, cotizacion]);
  };

  return (
    <CotizacionContext.Provider value={{ cotizaciones, addCotizacion }}>
      {children}
    </CotizacionContext.Provider>
  );
}

export function useCotizacion() {
  return useContext(CotizacionContext);
}