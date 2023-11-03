import React from 'react';
import { useCotizacion } from './CotizacionContext';

function CotizadorButton({ tipoPropiedad, tipoUbicacion, inputValue, propiedades, ubicaciones, onCalcular }) {
  const { addCotizacion } = useCotizacion();
  const costoM2 = 35.86;

  const handleCotizar = () => {
    if (!tipoPropiedad || !tipoUbicacion || !inputValue) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const factorPropiedad = parseFloat(
      propiedades.find((propiedad) => propiedad.tipo === tipoPropiedad)?.factor
    );
    
    const factorUbicacion = parseFloat(
      ubicaciones.find((ubicacion) => ubicacion.tipo === tipoUbicacion)?.factor
    );

    const valorInput = parseFloat(inputValue);
    
    const cotizacion = (factorPropiedad * factorUbicacion * valorInput * costoM2).toFixed(2);

  
    onCalcular(cotizacion);

    const nuevaCotizacion = {
      fechaHora: new Date().toLocaleString(),
      tipoPropiedad,
      tipoUbicacion,
      importePoliza: cotizacion,
    };

       addCotizacion(nuevaCotizacion);

    const historial = JSON.parse(localStorage.getItem('historial')) || [];

    historial.push(nuevaCotizacion);

    localStorage.setItem('historial', JSON.stringify(historial));
  };

  return (
    <div>
      <button onClick={handleCotizar}>Cotizar</button>
    </div>
  );
}

export default CotizadorButton;