import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Historial() {
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    // Recupera el historial del almacenamiento local y actualiza el estado.
    const historialGuardado = JSON.parse(localStorage.getItem('historial'));
    if (historialGuardado) {
      setHistorial(historialGuardado);
    }
  }, []);

  return (
    <div>
      <h2>Historial de Cotizaciones</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha y Hora</th>
            <th>Tipo de Propiedad</th>
            <th>Tipo de Ubicación</th>
            <th>Importe de Póliza Mensual</th>
          </tr>
        </thead>
        <tbody>
          {historial.map((cotizacion, index) => (
            <tr key={index}>
              <td>{cotizacion.fechaHora}</td>
              <td>{cotizacion.tipoPropiedad}</td>
              <td>{cotizacion.tipoUbicacion}</td>
              <td>${cotizacion.importePoliza.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">Volver a la página principal</Link>
    </div>
  );
}

export default Historial;
