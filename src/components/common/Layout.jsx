import React from 'react'
import Navbar from './Navbar/Navbar'
import './Layout.css'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <div className='layoutContainer'>
        {children}
      </div>
    </div>
  )
}

export default Layout
