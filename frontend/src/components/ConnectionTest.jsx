import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ConnectionTest() {
  // Definir el estado para almacenar los datos
  const [data, setData] = useState(null);

  // Utilizar useEffect para hacer la solicitud al backend cuando el componente se monta
  useEffect(() => {
    axios.get('http://localhost:5000/api/data') // Cambia la URL si es necesario
      .then(response => {
        // Actualizar el estado con los datos obtenidos
        setData(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []); // [] asegura que este efecto se ejecute solo una vez al montar el componente

  // Renderizar el componente basado en si data tiene valor o no
  return (
    <div>
      <h1>Prueba de Conexión</h1>
      {data ? (
        <div>
          <p>Mensaje: {data.message}</p>
          <p>Usuario: {data.user}</p>
          <p>Edad: {data.age}</p>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default ConnectionTest;
