import Link from 'next/link'
import React from 'react'
import styled from 'styled-components';




// USE STYLED COMPONENTS FOR BACKGROUND
const Category = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 m-4 gap-4 ">
    <div className="bg-dresses bg-cover bg-center h-[60vh] flex flex-col justify-center items-center shadow-lg">
       <h2 className="font-dancing text-5xl text-gold-100">Dresses</h2>
       <Link href="/products" passHref>
       <span className="px-4 py-1 bg-gold-100 font-semibold rounded ">Shop Now</span>
       </Link>
    </div>
    <div className="bg-accessories bg-cover bg-top h-[60vh] flex flex-col justify-center items-center shadow-lg">
    <h2 className="font-dancing text-5xl text-gold-100">Accessories</h2>
       <Link href="/products" passHref>
        <span className="px-4 py-1 bg-gold-100 font-semibold rounded">Shop Now</span>
        </Link>
    </div>
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