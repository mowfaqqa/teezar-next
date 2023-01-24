import React from 'react'
import style from './hamburger.module.css'
import Link from 'next/link'
import { useStateContext } from '../../context/Context';
import {provider, auth, signInWithRedirect, signOut } from '../../lib/firebase';

const Hamburger = () => {
    const { loggedUser } = useStateContext();
  
  

    const handleSignin = async () => {
      await signInWithRedirect(auth, provider);
      console.log("signed in");
      
    };
    const handleSignout = async () => {
      await signOut(auth);
      console.log("signed out");
    };
   return (
      <div className={`${style['menu-wrap']}`}>
        <input type="checkbox" className={`${style.toggler}`} />
        <div className={`${style.hamburger}`}><div></div></div>
        <div className={`${style.menu}`}>
            <div>
                <div>
                    <ul>
                        <li><Link href="/" passHref>Home</Link></li>
                        {/* <li><Link href="/about" passHref>About</Link></li>
                        <li><Link href="/about" passHref>Accessories</Link></li>
                        <li><Link href="/contact" passHref>Contact</Link></li>
                        <li><Link href="/bookings" passHref>Bookings</Link></li> */}
                        <li><Link href="/allproducts" passHref>Products / Collections</Link></li>
                        {loggedUser && (
                            <button
                            className='text-white text-xl my-1'
                            onClick={handleSignout}
                            >Log Out</button>
                        )}
                        {!loggedUser && (
                            <button
                            className='text-white text-xl'
                            onClick={handleSignin}
                            >Log In</button>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </div>
   )
}

export default Hamburger