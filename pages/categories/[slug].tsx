import Head from "next/head";
import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";
import Applayout from "../../components/Applayout";
import { client, urlFor } from "../../lib/sanityConfig";
// @ts-ignore
import { useCart } from "react-use-cart";
import { ShoppingCart } from "react-feather";
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from "next";


export const getStaticPaths: GetStaticPaths = async () => {

  const categoryQuery = '*[ _type == "categories"]';
  const data = await client.fetch(categoryQuery);

  const paths = data.map((item: any) => {
    return {
      params: { slug: item.slug.current },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const slug = context.params.slug;
  const categoryQuery = `*[slug.current == "${slug}"]{..., products[]->}`;
  const category = await client.fetch(categoryQuery);
  const [data] = category;

  return {
    props: { data },
  };
};

const Category = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);

  }, []);

  const { totalUniqueItems } = useCart();

  console.log(data);

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
      <h2 className="font-dancing text-5xl text-gold-100 font-bold text-center my-7">
        {data.name}
      </h2>
      <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-5 my-2 text-gold-100 font-semibold">
        {data.products.map((item: any) => {
          const src = urlFor(item.image).url();
          return (
            <div className="mx-3 my-7 cursor-pointer" key={item.name}>
              <Link href={`/products/${item.slug.current}`} passHref>
                <div>
                  <img
                    src={src}
                    alt="product"
                    className=" mx-auto rounded-md object-cover"
                  />
                  <div className="ml-3 leading-3">
                    <p className="capitalize text-lg">{item.name}</p>
                    <p className="font-black">&#8358;{item.price}</p>
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

export default Category;
Category.getLayout = function getLayout(page: ReactElement) {
  return <Applayout>{page}</Applayout>;
};
