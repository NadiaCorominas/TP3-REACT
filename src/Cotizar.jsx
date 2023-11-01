import React from 'react';

const Cotizador = ({ factor, opcionSeleccionada, otraOpcionSeleccionada, valorIngresado }) => {
  const calcularResultado = () => {
    // Realiza el cálculo utilizando el "factor" del MockAPI u otros datos necesarios.
    // Puedes usar el "factor", opcionSeleccionada, otraOpcionSeleccionada y valorIngresado en la fórmula de cálculo.
    const resultadoCotizacion = factor * opcionSeleccionada * otraOpcionSeleccionada * valorIngresado;
    return resultadoCotizacion;
  };

  return (
    <div>
      <h2>Resultado de la Cotización:</h2>
      <p>El importe de la póliza mensual es: ${calcularResultado()}</p>
    </div>
  );
};

export default Cotizador;