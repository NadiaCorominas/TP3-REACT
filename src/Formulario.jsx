import React, { useState, useEffect } from 'react';
import CotizadorButton from './CotizadorButton';

function Formulario() {
  const [propiedades, setPropiedades] = useState([]);
  const [ubicaciones, setUbicaciones] = useState([]);
  const [tipoPropiedad, setTipoPropiedad] = useState('');
  const [tipoUbicacion, setTipoUbicacion] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
        fetch('https://653831aaa543859d1bb14d53.mockapi.io/propiedades')
      .then((response) => response.json())
      .then((data) => setPropiedades(data));

 
    fetch('https://653831aaa543859d1bb14d53.mockapi.io/ubicaciones')
      .then((response) => response.json())
      .then((data) => setUbicaciones(data));
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!tipoPropiedad || !tipoUbicacion || !inputValue) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    console.log('Tipo de Propiedad:', tipoPropiedad);
    console.log('Tipo de Ubicación:', tipoUbicacion);
    console.log('Valor del input:', inputValue);
  };

  return (
    <div>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="tipoPropiedad">Tipo de Propiedad:</label>
          <select
            id="tipoPropiedad"
            value={tipoPropiedad}
            onChange={(e) => setTipoPropiedad(e.target.value)}
          >
            <option value="">Selecciona un tipo de propiedad</option>
            {propiedades.map((propiedad) => (
              <option key={propiedad.id} value={propiedad.tipo}>
                {propiedad.tipo}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="tipoUbicacion">Tipo de Ubicación:</label>
          <select
            id="tipoUbicacion"
            value={tipoUbicacion}
            onChange={(e) => setTipoUbicacion(e.target.value)}
          >
            <option value="">Selecciona un tipo de ubicación</option>
            {ubicaciones.map((ubicacion) => (
              <option key={ubicacion.id} value={ubicacion.tipo}>
                {ubicacion.tipo}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="inputField">Ingrese los Metros²:</label>
          <input
            type="number"
            id="inputField"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            min="10"
          />
        </div>
        <CotizadorButton
          tipoPropiedad={tipoPropiedad}
          tipoUbicacion={tipoUbicacion}
          inputValue={inputValue}
          propiedades={propiedades}
          ubicaciones={ubicaciones}
          onCalcular={(cotizacion) => setResultado(cotizacion)}
        />
        {resultado !== null && (
          <div>
            <p>Valor: $ {resultado}</p>
          </div>
        )}
      </form>
    </div>
  );
}
export default Formulario;
