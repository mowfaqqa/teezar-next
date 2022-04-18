import React, { ReactNode } from 'react'
import Footer from './Footer'
import Navbar2 from './Navbar'

interface AppProps {
    children: ReactNode
}
const Applayout = ({children}: AppProps) => {
  return (
    <div>
        <Navbar2 />
        <div className='h-full py-8'>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Applayout
