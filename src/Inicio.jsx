import React from 'react';
import { Link } from 'react-router-dom';
import Formulario from './Formulario';

function Inicio() {
  return (
    <div>
      <h2>Seguros para tu hogar</h2>
      <Formulario />
      <Link to="/historial">Ver Historial</Link>
    </div>
  );
}

export default Inicio;
