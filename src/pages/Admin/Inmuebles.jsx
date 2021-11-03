import React, {useEffect, useState} from 'react'

const Inmuebles = () => {
    
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState('Crear Nuevo Inmueble');
    useEffect(()=>{
        if(mostrarTabla){
          setTextoBoton('Crear Nuevo Inmueble');  
        }
        else{
          setTextoBoton('Mostrar todos los Inmuebles');
        }

    },[mostrarTabla])

    return (
       <div className='flex h-full w-full flex-col items-center justify-start p-8'>
           <div className='flex flex-col'>
             <h2 className='text-3xl font-extrabold text-gray-900'>
                 Pagina de administracion de Inmuebles</h2>
             <button 
             onClick= {()=>{setMostrarTabla(!mostrarTabla);
        }}
        className='text-white bg-indigo-500 p-5 rounded-full m-6 w-28 self-end'>
            {textoBoton}</button>

           </div>
           {mostrarTabla ? <TablaInmuebles />: <FormularioCreacionInmueble />}
       </div>
    )
}


const TablaInmuebles = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id del Inmueble</th>
                    <th>Direccion de Inmueble</th>
                    <th>Area del Inmueble</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>AS2510</td>
                    <td>Unit 6, 25 Coronation road</td>
                    <td>51 mts</td>
                    <td>350</td>
                </tr>
                <tr>
                    <td>RH4510</td>
                    <td> 61 Maryvale street</td>
                    <td>85 mts</td>
                    <td>420</td>
                </tr>
                <tr>
                    <td>AH7820</td>
                    <td>Unit 3, 15 Mc cuaired road</td>
                    <td>110 mts</td>
                    <td>600</td>
                </tr>
                <tr>
                    <td>F2110</td>
                    <td>Unit 6, 25 Coronation road</td>
                    <td>51 mts</td>
                    <td>350</td>
                </tr>
            </tbody>
        </table>
    )
};

const FormularioCreacionInmueble = () => {
    return (
    <div className='flex flex-col items-center justify-center'> 
        <h2 className='text-2xl font-extrabold text-gray-800'>Crear Nuevo Vehiculo</h2>
        <form classname='grid grid-cols-2'>
            <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type='text' />
            <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type='text' />
            <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type='text' />
            <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type='text' />
            <button className='col-span-2 bg-indigo-400 p-4 rounded-full shadow-md hover:bg-indigo-600 text-white'>Guardar Inmueble</button>
        </form>
    </div>
    )
}

export default Inmuebles
