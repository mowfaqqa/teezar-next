import Head from "next/head";
import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";
import Applayout from "../../components/Applayout";
import { client, urlFor } from "../../lib/sanityConfig";
import { groq } from "next-sanity";
// @ts-ignore
import { useCart } from "react-use-cart";
import { ShoppingCart } from "react-feather";
import { GetStaticProps, InferGetStaticPropsType } from "next";


interface Category {
  name: string;
  slug: any;
  products: any[];
}

export const getStaticProps: GetStaticProps = async () => {
  const productsQuery = groq`*[ _type == "categories"] | order(_createdAt asc){..., products[]->}`;
  const data = await client.fetch(productsQuery);

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
};

const Categories = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, []);
  //react use cart
  const { totalUniqueItems } = useCart();

  // console.log(data[0].products[0]);

  return (
    <>
      <Head>
        <title>Teezar_Fashion | Accessories</title>
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
      <h2 className="font-dancing text-5xl text-gold-100 font-bold text-center my-7">
        Accessories
      </h2>
      
        <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-2 md:grid-cols-5 gap-5 my-14">
          {data.map((category: Category) => {
            const src = urlFor(category.products[0].image).url();

            return (
              <div key={category.name} className="cursor-pointer hover:text-gold-100 transition-all duration-300 hover:scale-105 my-6">
                <Link href={`/categories/${category.slug.current}`} passHref>
                  <div>
                    <div className="mb-3">
                      <img
                        src={src}
                        alt="product"
                        className="mx-auto w-full rounded-md object-cover"
                      />
                    </div>
                    <div className="font-roboto font-bold tracking-wide border-l-8 border-gold-100 border-opacity-50 pl-1">
                      {category.name}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
    </>
  );
};

export default Categories;
Categories.getLayout = function getLayout(page: ReactElement) {
  return <Applayout>{page}</Applayout>;
};
