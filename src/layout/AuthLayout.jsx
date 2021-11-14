import React from 'react';
import Logo from 'media/logo.png';
import {Link} from 'react-router-dom'


const AuthLayout = ({children}) => {
    return (
        <div className='flex flex-col items-center justify-center bg-gray-50 py-2 px-4 sm:px-6 lg:px-8'>
         Autenticacion
           <div className=' flex w-full'>
            {children}

           </div>
        </div>
    )
}

export default AuthLayout
