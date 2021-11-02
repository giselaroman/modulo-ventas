import React from 'react'

const AuthLayout = ({children}) => {
    return (
        <div className='flex flex-col items-center justify-center bg-gray-50 py-2 px-4'>
            Autenticacion
            <div classNamr=' flex w-full flex-col'>
            {children}

            </div>
        </div>
    )
}

export default AuthLayout
