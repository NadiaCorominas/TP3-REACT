import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Historial() {
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
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
            <th>Importe Mensual</th>
          </tr>
        </thead>
        <tbody>
          {historial.map((cotizacion, index) => (
            <tr key={index}>
              <td>{cotizacion.fechaHora}</td>
              <td>{cotizacion.tipoPropiedad}</td>
              <td>{cotizacion.tipoUbicacion}</td>
              <td>
                {typeof cotizacion.importePoliza === 'string'
                  ? cotizacion.importePoliza.startsWith('$') // Verificar si ya comienza con $
                    ? cotizacion.importePoliza // Dejar como está
                    : `$${cotizacion.importePoliza}` // Agregar $
                  : `$${cotizacion.importePoliza.toFixed(2)}`
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">Volver a la página principal</Link>
    </div>
  );
}

export default Historial;
