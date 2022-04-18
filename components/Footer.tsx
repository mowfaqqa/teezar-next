import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
   return (
      <div className="m-2 border-t border-solid border-gray-300 p-3">
      <div className="bg-white border-b border-solid border-gray-300 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
         <div className="mb-3">
            <h5 className="font-dancing text-xl">Shop</h5>
            <li className="list-none md:text-xs hover:underline"><Link href="/"> <span className="list-none text-black font-roboto">Bespoke</span></Link></li>
            <li className="list-none md:text-xs hover:underline"><Link href="/" ><span className="text-black font-roboto">Accessories</span></Link></li>
            <li className="list-none md:text-xs hover:underline"><Link href="/" ><span className="text-black font-roboto">Luxury & Bridal</span></Link></li>
            <li className="list-none md:text-xs hover:underline"><Link href="/" ><span className="text-black font-roboto">Turban Caps & Headbands</span></Link></li>
            <li className="list-none md:text-xs hover:underline"><Link href="/" ><span className="text-black font-roboto">Ready To Wear</span></Link></li>
            <li className="list-none md:text-xs hover:underline"><Link href="/" ><span className="text-black font-roboto">Kaftan Dresses</span></Link></li>
            <li className="list-none md:text-xs hover:underline"><Link href="/" ><span className="text-black font-roboto">Kiddies wears</span></Link></li>
         </div>
         <div className="mb-3">
            <h6 className="font-dancing text-xl">Brands</h6>
            <li className="list-none md:text-xs hover:underline"><Link href="/" ><span className="text-black font-roboto">Elegante</span></Link></li>
            <li className="list-none md:text-xs hover:underline"><Link href="/" ><span className="text-black font-roboto">Teezar collection</span></Link></li>
            <li className="list-none md:text-xs hover:underline"><Link href="/" ><span className="text-black font-roboto">Lorem, ipsum.</span></Link></li>
            <li className="list-none md:text-xs hover:underline"><Link href="/" ><span className="text-black font-roboto">Lorem, ipsum.</span></Link></li>
         </div>
         <div className="mb-3">
            <h6 className="font-dancing text-xl">Help</h6>
            <li className="list-none md:text-xs hover:underline"><Link href="/" ><span className="text-black font-roboto">Privacy Policy</span></Link></li>
            <li className="list-none md:text-xs hover:underline"><Link href="/" ><span className="text-black font-roboto">Terms and Conditions</span></Link></li>
            <li className="list-none md:text-xs hover:underline"><Link href="/" ><span className="text-black font-roboto">Contact Us</span></Link></li>
            <li className="list-none md:text-xs hover:underline"><Link href="/" ><span className="text-black font-roboto">FAQs</span></Link></li>
         </div>
         <div className="mb-3">
            <h6 className="font-dancing text-xl">Teezar</h6>
            <li className="list-none md:text-xs hover:underline"><Link href="/" ><span className="text-black font-roboto">About Us</span></Link></li>
            <li className="list-none md:text-xs hover:underline"><Link href="/" ><span className="text-black font-roboto">Blog</span></Link></li>
            <li className="list-none md:text-xs hover:underline"><Link href="/" ><span className="text-black font-roboto">Gallery</span></Link></li>
         </div>
         <div className="mb-3">
            <h6 className="font-dancing text-xl">Contact Information</h6>
            <li className="list-none md:text-xs p-1 text-black"><PhoneIcon className="w-5 inline-block"/> : 07042829999</li>
            <li className="list-none md:text-xs p-1 text-black"><LocationMarkerIcon className="w-5 inline-block"/> : Kaduna / Abuja, NG.</li>
            <li className="list-none md:text-xs p-1 text-black"><MailIcon className="w-5 inline-block"/> : teezarfashion@gmail.com</li>
            <div className="mt-3">
               <i className="fab fa-facebook p-2"></i>
               <i className="fab fa-twitter p-2"></i>
               <i className="fab fa-instagram p-2"></i>
            </div>
         </div>
      </div>
         <div className="m-2 p-1 text-center">
            <p className="font-dancing text-sm md:text-xl text-black"> &copy; Teezar fashion, 2021</p>
         </div>
      </div>
   )
}

export default Footer
