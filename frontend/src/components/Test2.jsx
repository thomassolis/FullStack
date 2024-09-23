import {useState, useEffect} from 'react';
import axios from 'axios';
function Test2(){
    const [data, setData]=useState(null)


    useEffect(()=>{
        axios.get('http://localhost:5000/probando')
        .then(response=>{
            setData(response.data);
            console.log('data2', response)
        })
        .catch(error=>{
            console.log('pendejo')
        })
    })
    return(
        <section>
           {data ? (
        <div>
          <p>Nombre: {data.nombre}</p>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
        </section>
    )
}

export default Test2