import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Formulario from './Formulario';
import Historial from './Historial';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/historial" element={<Historial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;