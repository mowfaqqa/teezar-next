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
                  <i className="fa-regular fa-facebook text-2xl px-2 text-white hover:text-gold-100"></i>
                  <i className="fa-regular fa-twitter text-2xl px-2 text-white hover:text-gold-100"></i>
                  <i className="fa-regular fa-instagram text-2xl px-2 text-white hover:text-gold-100"></i>
               </div>
               <div>
                  <div className="text-center m-1">
                     <h1 className="text-white text-8xl font-dancing">Teezar</h1>
                     <h6 className="text-white text-xl font-dancing my-2">Fashion</h6>
                  </div>
               </div>
               <div className="icons flex justify-end mx-2">
                  <Link href='/user' passHref>
                  <span>
                     <UserIcon width={14} height={14}/>
                  </span>
                  </Link>
                  <Link href='/search' passHref><SearchIcon width={14} height={14} /></Link> 
                  <Link href='/products' passHref><ShoppingBagIcon width={14} height={14} /></Link>
               </div>
            </div>
            <ul className="hidden pb-2 md:flex justify-center items-center">
                     <Link href='/home' passHref><a className="text-white text-base px-4 hover:text-gold-200">Home</a></Link>
                     <Link href='/shop' passHref><a className="text-white text-base px-4 hover:text-gold-200">Shop</a></Link>
                     <Link href='/accessories' passHref><a className="text-white text-base px-4 hover:text-gold-200">Accessories</a></Link>
                     <Link href='/collections' passHref><a className="text-white text-base px-4 hover:text-gold-200">Collections</a></Link>
            </ul>
         </div>
         {/* mobile view */}
         <div className="md:hidden flex justify-between items-center bg-black border-b border-solid border-black px-2">
            <div className="icons flex justify-end mx-2">
               <Link href='/user' passHref><UserIcon width={14} height={14} /></Link> 
               <Link href='/products' passHref><ShoppingBagIcon width={14} height={14} /></Link>
            </div>
            <div className="text-center m-1">
               <h1 className="text-white text-8xl font-dancing"><Link href='/'>Teezar</Link></h1>
               <h6 className="text-white text-sm font-dancing my-2">Fashion</h6>
            </div>
            <div className="icons flex justify-end mx-2">
                  <Link href='/' passHref><SearchIcon width={14} height={14} /></Link>
                  <Hamburger />
            </div>
         </div>
      </div>
   )
}

export default Navbar2

