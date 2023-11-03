import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Historial from './Historial';
import { CotizacionProvider } from './CotizacionContext';

function App() {
  return (
    <CotizacionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/historial" element={<Historial />} />
        </Routes>
      </BrowserRouter>
      </CotizacionProvider>
    
  );
}

export default App;