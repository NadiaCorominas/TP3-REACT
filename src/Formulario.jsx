import React, { useState, useEffect } from 'react';

const Formulario = ({ onCotizar }) => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [otraOpcionSeleccionada, setOtraOpcionSeleccionada] = useState('');
  const [valorIngresado, setValorIngresado] = useState('');
  const [opciones1, setOpciones1] = useState([]);
  const [opciones2, setOpciones2] = useState([]);

  const calcularResultado = (opcionSeleccionada, otraOpcionSeleccionada, valorIngresado, factor) => {
    factor * opcionSeleccionada * otraOpcionSeleccionada * valorIngresado
  };

  useEffect(() => {
    // Realiza una solicitud HTTP para obtener las opciones desde el MockAPI.
    fetch('https://653831aaa543859d1bb14d53.mockapi.io/propiedades')
      .then((response) => response.json())
      .then((data) => setOpciones1(data));

    fetch('https://653831aaa543859d1bb14d53.mockapi.io/ubicaciones')
      .then((response) => response.json())
      .then((data) => setOpciones2(data));
  }, []);

  
  const [factor, setFactor] = useState(0); // Inicializa el factor en 0

  useEffect(() => {
    // Realiza una solicitud HTTP para obtener el factor desde el MockAPI.
    fetch('https://653831aaa543859d1bb14d53.mockapi.io/ubicaciones')
      .then((response) => response.json())
      .then((data) => setFactor(data.factor)); // Asume que el MockAPI devuelve un objeto con el campo "factor"
  }, []);


  const handleCotizar = () => {
    // Realiza el cálculo y llama a la función onCotizar con el resultado.
    const resultado = calcularResultado(opcionSeleccionada, otraOpcionSeleccionada, valorIngresado);
    onCotizar(resultado);
  };

  return (
    <div>
      <h2>Completa el formulario:</h2>
      <label>Tipo de Propiedad:</label>
      <select value={opcionSeleccionada} onChange={(e) => setOpcionSeleccionada(e.target.value)}>
        <option value="">Selecciona una opción</option>
        {opciones1.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.tipo}
          </option>
        ))}
      </select>

      <label>Ubicación:</label>
      <select value={otraOpcionSeleccionada} onChange={(e) => setOtraOpcionSeleccionada(e.target.value)}>
        <option value="">Selecciona otra opción</option>
        {opciones2.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.tipo}
          </option>
        ))}
      </select>

      <label>Metros Cuadrados:</label>
      <input type="number" value={valorIngresado} onChange={(e) => setValorIngresado(e.target.value)} />

      <button onClick={handleCotizar}>Cotizar</button>
    </div>
    
  );
};

export default Formulario;