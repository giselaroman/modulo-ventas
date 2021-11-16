import React, {useEffect, useState} from 'react'


const vehiculosBackend = [
    {
        idInmueble: 'HR2542',
        direccionInmueble: '24 pimpama rd',
        area: 400,
        precio: 500,
    },
    {
        idInmueble: 'RF5414',
        direccionInmueble: 'nido de tormenta street',
        area: 300,
        precio: 500,
    },
    {
        idInmueble: 'GT7852',
        direccionInmueble: 'Mansquick street',
        area: 800,
        precio: 1200,
    },
    {
        idInmueble: 'CF7856',
        direccionInmueble: 'CLEMENT ROAD',
        area: 1200,
        precio: 3500,
    },
]

const Inmuebles = () => {
    
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [inmuebles, setInmuebles] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Crear Nuevo Inmueble');

    useEffect (() => {
        //obtener lista de vehiciculos de backend
        setVehiculos(vehiculosBackend);
    }, []);

    useEffect(()=>{
        if(mostrarTabla){
          setTextoBoton('Crear Nuevo Inmueble');  
        }
        else{
          setTextoBoton('Mostrar todos los Inmuebles');
        }

    },[mostrarTabla]);

    return (
       <div className='flex h-full w-full flex-col items-center justify-start p-8'>
           <div className='flex flex-col'>
             <h2 className='text-3xl font-extrabold text-gray-900 justify-center'>
                 Pagina de administracion de Inmuebles</h2>
             <button 
             onClick= {()=>{setMostrarTabla(!mostrarTabla);
        }}
        className='text-white bg-indigo-500 p-5 rounded-full m-6 w-28 self-end'>
            {textoBoton}</button>

           </div>
           {mostrarTabla ? <TablaInmuebles listaInmuebles={Inmuebles} />: <FormularioCreacionInmueble />}
       </div>
    )
}


const TablaInmuebles = ({listaInmuebles}) => {
    useEffect(() => {
        console.log('este es el estado del listado de inmuebles en el componente de tabla', listaInmuebles);
    }, [listaInmuebles]);
    return (
        <div className='flex flex-col items-center justify-center'>
         <h2 className='text-2xl font-extrabold text-gray-800'> Todos los Inmuebles </h2>
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
                {listaInmuebles.map((inmueble)=>{
                    return(
                <tr>
                    <td>{inmueble.idInmueble}</td>
                    <td>{inmueble.direccionInmueble}</td>
                    <td>{inmueble.area}</td>
                    <td>{inmueble.precio}</td>
                </tr>
                    )
                })}
            </tbody>
            </table>
        </div>
    )
};
 
const FormularioCreacionInmueble = () => {
    return (
    <div className='flex flex-col items-center justify-center'> 
        <h2 className='text-2xl font-extrabold text-gray-800'>Crear Nuevo Inmueble</h2>
        <form classname='grid grid-col-2'>
            <input ClassName='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
            type='text' placeholder='IdInmueble' />
            <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
            type='text' placeholder='direccionInmueble'/>
            <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
            type='text'placeholder='areaInmueble' />
            <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='text'  placeholder='precio'/>
            <button onclick={()=>setMostrarTabla(true)}
             className='col-span-2 bg-indigo-400 p-4 rounded-full shadow-md hover:bg-indigo-600
             text-white'>Guardar Inmueble</button>
        </form>
    </div>
    );
};

export default Inmuebles
