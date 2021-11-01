import Header from './Header'
import Footer from './Footer'
import React from 'react'

const PublicLayout = ({children}) => {
 return (
    <div className='mainContainer'>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </div>
 )
}

export default PublicLayout
