
import React from 'react'
import Sidebar from 'components/Sidebar'

const HomeLayout = ({children}) => {
    return (
        <div className='flex w-screen h-screen '>
            <Sidebar/>
            <main className='flex w-full bg-gray-200 overflow-y-scroll items-center justify-center'>
            {children}
            </main>
           
        </div>
    )
}

export default HomeLayout
