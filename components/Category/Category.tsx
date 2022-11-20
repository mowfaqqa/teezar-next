import Link from 'next/link'
import React from 'react'
import styled from 'styled-components';




// USE STYLED COMPONENTS FOR BACKGROUND
const Category = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-3 my-4">
    <Div bg={`linear-gradient(45deg, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64)), url('/products/dresses.jpg')no-repeat center center/cover`} height="60vh" rsheight="50vh" className="flex flex-col justify-center items-center">
       <h2 className="font-dancing text-5xl text-gold-100">Dresses</h2>
       <Link href="/products" passHref>
       <span className="px-4 py-1 bg-gold-100 border-white">Shop Now</span>
       </Link>
    </Div>
    <Div bg={`linear-gradient(45deg, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64)), url('/products/accessories.jpg')no-repeat center center/cover`} height="60vh" rsheight="50vh" className="flex flex-col justify-center items-center">
    <h2 className="font-dancing text-5xl text-gold-100">Accessories</h2>
       <Link href="/products" passHref>
        <span className="px-4 py-1 bg-gold-100 border-white">Shop Now</span>
        </Link>
    </Div>
 </div>
  )
}

export default Category
const Div = styled   .div `
   background : ${(props : any) => props.bg};
   overflow: hidden;
   height: ${(props : any) => props.height};
   margin: 0.4rem;

   @media (max-width:500px) {
      height: ${(props : any ) => props.rsheight};
   }
`