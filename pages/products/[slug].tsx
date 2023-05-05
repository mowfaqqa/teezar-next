import React, { ReactElement, useState, useEffect } from "react";
import Applayout from "../../components/Applayout";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { client, urlFor } from "../../lib/sanityConfig";
// @ts-ignore
import { useCart } from "react-use-cart";
import { ShoppingCart } from "react-feather";
import Link from "next/link";
import { useStateContext } from "../../context/Context";
import Modal from "../../components/Modal";

type Data = {
  data: Itemz;
};

interface Itemz {
  name: string;
  image: any;
  category: string;
  desc: string;
  price: number;
  slug: any;
  id: string;
  quantity?: number;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const productQuery = '*[ _type == "products"]';
  const data = await client.fetch(productQuery);

  const paths = data.map((item: Itemz) => {
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
  const productQuery = `*[slug.current == "${slug}"]`;
  const product = await client.fetch(productQuery);
  const [data] = product;
  return {
    props: { data },
  };
};

const Product = ({ data }: Data) => {
  
  const [show, setShow] = useState(false);
  const { loggedUser } = useStateContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (loggedUser) {
      addItem({ ...data });
    } else {
      setShow(!show);
    }
  };

  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, []);
  //react use cart
  const { addItem, items, removeItem, updateItemQuantity, totalUniqueItems } =
    useCart();
  //get same item as data
  const [item] = items.filter((item: any) => item.id == data.id);
  // console.log(item);

  return (
    <>
      <Head>
        <title>Teezar_Fashion | Products</title>
      </Head>
      {show && <Modal func={handleSubmit} data="Proceed with your Purchase" />}
      <div className="fixed right-10 mt-10">
        <Link href="/cart" passHref>
          <div className="relative hover:scale-105 transition-all duration-100 ease-linear ">
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

      <div className="grid grid-cols-1 md:grid-cols-3  p-4">
        <div className="col-span-2">
          <img
            src={urlFor(data.image).url()}
            alt="product"
            className="w-4/6 mx-auto"
          />
        </div>
        <div>
          <form onSubmit={handleSubmit} className="col-span-1  py-3">
            <h2 className="text-3xl text-center uppercase md:mt-10 mt-3 font-bold text-gold-200">
              {data?.name}
            </h2>
            <p className="text-gold-300 font-bold text-xl text-center mt-2">
              &#8358;{data.price}
            </p>
            <p className="text-gray-600 text-base text-center m-2">
              {data.desc}
            </p>
            <p className="font-dancing text-4xl text-gold-100 font-bold text-center my-7 ">
              {data.category}
            </p>
            <div className="mt-8 mx-auto grid grid-cols-1">
              <div className="text-center">
                {!item && (
                  <button
                    type="submit"
                    className="border px-3 py-1 border-gold-100 bg-gold-100 text-white hover:bg-white hover:text-gold-100 hover:border hover:border-gold-300 font-semibold rounded transition-all duration-300 shadow-md w-1/2"
                  >
                    + Add To Cart
                  </button>
                )}
              </div>
            </div>
          </form>

          {item && (
            <div className="grid justify-center">
              <div className="flex justify-center items-center">
                <button
                  type="button"
                  className="border mr-1 px-3 py-1 border-gold-100 bg-gold-100 text-white font-semibold rounded transition-all duration-300 shadow-md w-full"
                  onClick={() =>
                    updateItemQuantity(item.id, (item?.quantity as number) - 1)
                  }
                >
                  -
                </button>
                <p className="border px-5 py-1 border-solid border-gray-400 text-gold-100 font-bold">
                  {item?.quantity}
                </p>
                <button
                  type="button"
                  className="border ml-1 px-3 py-1 border-gold-100 bg-gold-100 text-white font-semibold rounded transition-all duration-300 shadow-md w-full hover:scale-105"
                  onClick={() =>
                    updateItemQuantity(item.id, (item?.quantity as number) + 1)
                  }
                >
                  +
                </button>
              </div>
              <div>
                <button
                  className="border mt-3 px-3 py-1 border-gold-100 bg-gold-100 text-white hover:bg-white hover:text-gold-100 hover:border hover:border-gold-300 font-semibold rounded transition-all duration-300 shadow-md w-full hover:scale-105"
                  onClick={() => removeItem(item.id)}
                >
                  Remove &times;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;

Product.getLayout = function getLayout(page: ReactElement) {
  return <Applayout>{page}</Applayout>;
};
