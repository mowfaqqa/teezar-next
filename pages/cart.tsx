import React, { ReactElement, useEffect, useState } from "react";
import Applayout from "../components/Applayout";
import Head from "next/head";
// @ts-ignore
import { useCart } from "react-use-cart";
import { urlFor } from "../lib/sanityConfig";
import Link from "next/link";
import {
  XCircle,
  Tool,
  Facebook,
  Instagram,
  Twitter,
  Phone,
} from "react-feather";
import { useStateContext } from "../context/Context";

const Cart = () => {
  const { isEmpty, totalUniqueItems, items, cartTotal, removeItem } = useCart();
  const { loggedUser } = useStateContext();
  const [render, setRender] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
    console.log(show);
  };

  useEffect(() => {
    setRender(true);
  }, []);

  if (isEmpty)
    return (
      <div className="h-[40vh]">
        <p className=" mt-10 text-center font-semibold text-2xl">
          Your cart is empty...
        </p>
      </div>
    );

  return (
    <div>
      <Head>
        <title>Teezar_Fashion | Products</title>
      </Head>
      {render && (
        <>
          {show && (
            <div className=" z-50 flex justify-center items-center w-[100%] h-[100%] fixed top-0 left-0 bg-black bg-opacity-70">
              <div className="bg-white p-6 rounded font-bold flex flex-col items-center gap-7 w-[85%] md:w-[50%] ">
                <div className="">
                  <div className="text-center">
                    <Tool className="mx-auto mb-1 text-gold-100" />{" "}
                    <span>
                      <span className="text-gold-100 font-bold">
                        Hello {loggedUser?.displayName}
                      </span>
                      . Sorry our payment system is currently under maintenance.
                      Contact me on my socials to proceed with your purchase. Thank you.
                    </span>
                  </div>
                  <div className="flex mt-2 mx-auto justify-center">
                    <a
                      href=" https://m.facebook.com/100059616439281/"
                      target="_blank"
                    >
                      <Facebook
                        size={25}
                        fill="white"
                        className=" text-blue-500 m-2 hover:fill-blue-500 hover:cursor-pointer"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/teezar_fashion/?hl=en"
                      target="_blank"
                    >
                      <Instagram
                        size={25}
                        className=" hover:fill-red-500 hover:text-white m-2 text-red-500 hover:cursor-pointer"
                      />
                    </a>
                    <a
                      href=" https://mobile.twitter.com/xarah_bint"
                      target="_blank"
                    >
                      <Twitter
                        size={25}
                        fill="white"
                        className=" text-blue-500 hover:fill-blue-500  m-2  hover:cursor-pointer"
                      />
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=8166508998&text=Hello%20Teezar,%20I%27d%20like%20to%20make%20an%20order%20for%20product%20name______"
                      target="_blank"
                    >
                      <Phone
                        size={25}
                        fill="white"
                        className=" text-green-500 hover:fill-green-500 m-2  hover:cursor-pointer"
                      />
                    </a>
                  </div>
                </div>
                <XCircle
                  className="text-gold-100 hover:cursor-pointer"
                  onClick={handleClick}
                />
              </div>
            </div>
          )}

          <h1 className="text-center my-5 text-xl font-bold">
            Cart ({totalUniqueItems})
          </h1>
          <ul>
            {items.map((item: any) => (
              <div
                key={item.id}
                className="mx-auto shadow-md mb-4 p-1 md:p-3 rounded-xl bg-white grid grid-cols-2 md:grid-cols-4 justify-center items-center px-2"
              >
                <Link href={`/products/${item.slug.current}`}>
                  <img
                    src={urlFor(item.image).url()}
                    alt="product"
                    className="w-24 rounded-md border-2 border-gold-300 cursor-pointer"
                  />
                </Link>
                <div className=" self-center text-sm grid">
                  <p className=" font-semibold">
                    {item.name.toUpperCase()}
                    <span className="ml-1 text-xs text-gray-500">
                      &times;{item.quantity}
                    </span>
                  </p>
                  <p>
                    Size: <span className="text-gold-100">{item.size}</span>
                  </p>
                  <p>
                    Color: <span className="text-gold-100">{item.color}</span>
                  </p>
                  <p>
                    Price:{" "}
                    <span className="text-gold-100 font-bold">
                      N{item.price}
                    </span>
                  </p>
                </div>
                <div></div>
                <div className="w-full flex justify-end items-center px-5  md:mr-10 text-sm font-bold ">
                  <div className="py-3">
                    <p>N{item.price * (item?.quantity as number)}</p>
                    <button
                      className="border mt-2 text-sm px-2 py-1 border-gold-100 bg-gold-100 text-white font-semibold rounded transition-all duration-300 shadow-md w-full hover:scale-105"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove Item
                    </button>
                  </div>
                </div>

                {/* <button
              onClick={() =>
                updateItemQuantity(item.id, (item?.quantity as number) - 1)
              }
            >
              -
            </button> */}
                {/* <button
              onClick={() =>
                updateItemQuantity(item.id, (item?.quantity as number) + 1)
              }
            >
              +
            </button> */}
                {/* <button onClick={() => removeItem(item.id)}>&times;</button> */}
              </div>
            ))}
          </ul>
          <p className="font-semibold text-xl text-right mr-10">
            TOTAL: N{cartTotal}
          </p>
          <div className="flex justify-center mt-5">
            <button
              onClick={handleClick}
              className="border px-3 py-3 border-gold-100 bg-gold-100 text-white hover:bg-white hover:text-gold-100 hover:border hover:border-gold-300 font-semibold rounded transition-all duration-300 shadow-md w-1/2 md:w-1/3 mx-auto text-lg tracking-widest uppercase"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

Cart.getLayout = function getLayout(page: ReactElement) {
  return <Applayout>{page}</Applayout>;
};
