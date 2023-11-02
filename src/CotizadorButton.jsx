import React from 'react';

function CotizadorButton({ tipoPropiedad, tipoUbicacion, inputValue, propiedades, ubicaciones, onCalcular }) {
  const handleCotizar = () => {
    if (!tipoPropiedad || !tipoUbicacion || !inputValue) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Obtiene el factor según el tipo de propiedad seleccionado.
    const factorPropiedad = parseFloat(
      propiedades.find((propiedad) => propiedad.tipo === tipoPropiedad)?.factor
    );

    // Obtiene el factor según el tipo de ubicación seleccionado.
    const factorUbicacion = parseFloat(
      ubicaciones.find((ubicacion) => ubicacion.tipo === tipoUbicacion)?.factor
    );

    // Convierte el valor del input a número.
    const valorInput = parseFloat(inputValue);

    // Realiza el cálculo.
    const cotizacion = (factorPropiedad + factorUbicacion) * valorInput;

    // Llama a la función onCalcular para pasar el resultado al componente Formulario.
    onCalcular(cotizacion);
  };

  return (
    <div>
      <button onClick={handleCotizar}>Cotizar</button>
    </div>
  );
}

export default CotizadorButton;
