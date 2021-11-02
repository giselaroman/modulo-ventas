import React, {useEffect, useState} from 'react'

const Inmuebles = () => {
    
    const [IdInmueble, setIdInmueble] = useState("Este es el id inicial: 2542df");


    useEffect(()=>{
        console.log('holas, soy un use effect');
        // PAS 2
        // PASO 3
        // PASO 4
    },[]);

    useEffect( () => {
        console.log("esta es una funcion que se ejecuta cada vez que cambia el id del inmueble")
        console.log("el valor de la variable es ", IdInmueble);
    } , [IdInmueble]);


    const enviarDatosBackend = () => {
        console.log("el valor de la variable id del inmueble es ", IdInmueble);
    }
    
    return (
        <form className='flex flex-col'>
            <h2> Formulario de Registro de Inmueble </h2>
            <input onChange={(e) => {setIdInmueble(e.target.value)}} 
            value={IdInmueble}
            type="text" placeholder='Id del Inmueble'/>
            <input onChange={(e) =>{console.log(e.target.value)}} type="text" placeholder='Direccion del Inmueble'/>
            <input onChange={(e) =>{console.log(e.target.value)}} type="text" placeholder='Area del inmueble' />
            <button type='button' onClick={enviarDatosBackend} className='bg-indigo-500 text-white'>Enviar Datos</button>
        </form>
    )
}

export default Inmuebles
