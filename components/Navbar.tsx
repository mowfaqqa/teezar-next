import React from 'react'
import Link from 'next/link'
import { SearchIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/outline'
import Hamburger from './hamburger/Hamburger'


const Navbar2 = () => {
   return (
      <div>
         <div className="hidden md:block bg-black border-b border-solid border-black px-6 sticky top-0 z-10">
            <div className="bg-transparent pb-2 mb-3 flex justify-between items-center">
               <div>
                  <i className="fab fa-facebook text-2xl px-2 text-white hover:text-gold-100"></i>
                  <i className="fab fa-twitter text-2xl px-2 text-white hover:text-gold-100"></i>
                  <i className="fab fa-instagram text-2xl px-2 text-white hover:text-gold-100"></i>
               </div>
               <div>
                  <div className="text-center m-1">
                     <h1 className="text-white text-8xl font-dancing">Teezar</h1>
                     <h6 className="text-white text-xl font-dancing my-2">Fashion</h6>
                  </div>
               </div>
               <div className="icons flex justify-end mx-2">
                  <Link href='/'><UserIcon className="w-8 text-white hover:text-gold-100" /></Link>
                  <Link href='/'><SearchIcon className="w-8 text-white hover:text-gold-100" /></Link> 
                  <Link href='/'><ShoppingBagIcon className="w-8 text-white hover:text-gold-100" /></Link>
               </div>
            </div>
            <ul className="hidden pb-2 md:flex justify-center items-center">
                     <li><Link href='/#'><span className="text-white text-base px-4 hover:text-gold-100">Home</span></Link></li>
                     <li><Link href='/#'><span className="text-white text-base px-4 hover:text-gold-100">Shop</span></Link></li>
                     <li><Link href='/#'><span className="text-white text-base px-4 hover:text-gold-100">Accessories</span></Link></li>
                     <li><Link href='/#'><span className="text-white text-base px-4 hover:text-gold-100">Collections</span></Link></li>
            </ul>
         </div>
         {/* mobile view */}
         <div className="md:hidden flex justify-between items-center bg-black border-b border-solid border-black px-2">
            <div className="icons flex justify-end mx-2">
               <Link href='/'><UserIcon className="w-5 px-1 md:w-8 text-white hover:text-gold-100" /></Link> 
               <Link href='/'><ShoppingBagIcon classNa px-1me="w-5 px-1 md:w-8 text-white hover:text-gold-100" /></Link>
            </div>
            <div className="text-center m-1">
               <h1 className="text-white text-8xl font-dancing"><Link href='/'>Teezar</Link></h1>
               <h6 className="text-white text-sm font-dancing my-2">Fashion</h6>
            </div>
            <div className="icons flex justify-end mx-2">
                  <Link href='/'><SearchIcon className="w-5 px-1 md:w-8 text-white hover:text-gold-100" /></Link>
                  <Hamburger />
            </div>
         </div>
      </div>
   )
}

export default Navbar2

