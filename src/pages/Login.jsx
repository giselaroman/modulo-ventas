import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex flex-col w-full justify-between'>
      <h2 className='m-3 text-center text-3xl font-extrabold text-gray-900'>Inicia sesion en tu cuenta</h2>
      <form className='mt-8 max-w-md'>
        <div className='flex flex-col w-full justify-between'>
          <input className='appearance-none px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500' 
          type='email' placeholder='dsl@c.com' required/>
          <input className='appearance-none px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500'
          type='password' required/>
        </div>
        <div className='flex justify-between'>
          <div>
            <label htmlFor="Recuerdame">
              <input type='checkbox' name='Recuerdame'/> 
              Recuerdame
            </label> 
            </div>
            <div>
            <Link to='/'>
              Olvidaste tu contrase'a?
            </Link>
            </div>
          </div>
        <div>
          <Link htmlFor='/admin'>
            <button type='submit'>
              Iniciar Sesion
            </button>
          </Link>
        </div>
        <div> O </div>
        <div>
          <button>
            Continua con google
          </button>
        </div>
      </form>    
    </div>
  );
};

export default Login;
