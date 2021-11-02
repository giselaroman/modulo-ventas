import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>Inicia sesion en tu cuenta</h2>
            <form>
                <div>
                    <input type='email' placeholder='dsl@c.com' required/>
                    <input type='password' required/>
                </div>
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
                <div>
                    <Link htmlFor='/admin'>
                    <button type='submit'>
                        Iniciar Sesion
                    </button>
                    </Link>

                </div>
            </form>    
        </div>
    )
}

export default Login;
