import Head from 'next/head';
import Link from 'next/link';
import React, { ReactElement } from 'react'
import Applayout from '../../components/Applayout';
import { client, urlFor } from '../../lib/sanityConfig';
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

// console.log('data',data);



  return (
    <>
    <Head>
      <title>Teezar_Fashion | Products</title>
    </Head>
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