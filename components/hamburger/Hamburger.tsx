import React from 'react'
import style from './hamburger.module.css'
import Link from 'next/link'

const Hamburger = () => {
   return (
      <div className={`${style['menu-wrap']}`}>
        <input type="checkbox" className={`${style.toggler}`} />
        <div className={`${style.hamburger}`}><div></div></div>
        <div className={`${style.menu}`}>
            <div>
                <div>
                    <ul>
                        <li><Link href="/" passHref>Home</Link></li>
                        <li><Link href="/about" passHref>About</Link></li>
                        <li><Link href="/about" passHref>Accessories</Link></li>
                        <li><Link href="/contact" passHref>Contact</Link></li>
                        <li><Link href="/bookings" passHref>Bookings</Link></li>
                        <li><Link href="/allproducts" passHref>Products / Collections</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
   )
}

export default Hamburger