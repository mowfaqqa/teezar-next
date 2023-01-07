import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import React, { ReactElement, useEffect, useState } from 'react'
import Applayout from '../../components/Applayout';
import { client, urlFor } from '../../lib/sanityConfig';
// @ts-ignore  
import { useCart } from "react-use-cart";
import { ShoppingCart } from "react-feather";
import { GetStaticProps, InferGetStaticPropsType } from "next";


interface Item {
  name: string;
  image: any;
  category: string,
  desc: string,
  price: number,
  slug:any
}

export const getStaticProps:GetStaticProps = async () => {
  const productsQuery = '*[ _type == "products"] | order(_createdAt asc)';
  const data = await client.fetch(productsQuery);

  return {
    props: {
      data
    },
  };
};

 

const Products = ({data}:InferGetStaticPropsType<typeof getStaticProps>) => {

  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, []);
  //react use cart
  const { totalUniqueItems } =
    useCart();



  return (
    <>
    <Head>
      <title>Teezar_Fashion | Products</title>
    </Head>
    <div className="fixed right-10 mt-10">
        <Link href="/cart" passHref>
          <div className="relative hover:scale-105 transition-all duration-100 ease-linear">
            <div className="w-5 h-5  rounded-full bg-red-600 text-white text-sm absolute top-6 left-6 grid place-items-center cursor-pointer ">
              {render ? totalUniqueItems : ""}
            </div>
            <div>
              <ShoppingCart
                size={34}
                className="text-gold-100 hover:scale  transition-all duration-300 ease-linear cursor-pointer"
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 my-2 text-gold-100 font-semibold">
          {data.map((item:Item) => {
            const src = urlFor(item.image).url();
            return (
                <div className="m-2 cursor-pointer" key={item.name}>
                <Link href={`/products/${item.slug.current}`} passHref>
                  <div>

                  <img src={src} alt="product" className="w-full mx-auto rounded-md h-5/6 object-cover"/>
                  <div className="ml-3 leading-3">
                      <p className='capitalize text-lg'>{item.name}</p>
                      <p className='font-black'>{item.price}</p>
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