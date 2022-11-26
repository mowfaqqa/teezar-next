import Head from 'next/head';
import Link from 'next/link';
import React, { ReactElement } from 'react'
import Applayout from '../../components/Applayout';
import productData from '../../components/productData';


const Products = () => {
  return (
    <>
    <Head>
      <title>Teezar_Fashion | Products</title>
    </Head>
      <div className="grid grid-cols-2 md:grid-cols-4 my-2 text-gold-100 font-semibold">
          {productData.map((item) => {
            return (
                <div className="m-2 cursor-pointer" key={item.id}>
                <Link href={`/products/${item.id}`} passHref>
                  <div>

                  <img src={item.img} alt="product" className="w-full mx-auto rounded-md h-5/6 object-cover"/>
                  <div className="text-center">
                      <h5>{item.product_name}</h5>
                      <h6>{item.price}</h6>
                  </div>
                  </div>
                </Link>
                </div>
            )
          })}
      </div>
    </>
  )
}

export default Products
Products.getLayout = function getLayout(page: ReactElement) {
    return <Applayout>{page}</Applayout>;
  };