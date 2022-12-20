import React, { ReactElement, useEffect, useState } from "react";
import Applayout from "../components/Applayout";
import Head from "next/head";
import { useCart } from "react-use-cart";
import { urlFor } from "../lib/sanityConfig";
import Link from "next/link";

const Cart = () => {
  const { isEmpty, totalUniqueItems, items, cartTotal, removeItem } = useCart();
  console.log(items);

  const [render, setRender] = useState(false);

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
          <h1 className="text-center my-5 text-xl font-bold">
            Cart ({totalUniqueItems})
          </h1>
          <ul>
            {items.map((item) => (
              <li
                key={item.id}
                className="w-[98%] mx-auto shadow-md mb-4 p-1 md:p-3 rounded-xl bg-white grid grid-cols-2 justify-center  "
              >
                <div className="ml-2 md:ml-10 flex justify-start gap-9 mb-2">
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
                </div>
                <div className="justify-self-end self-center mr-2 md:mr-10 text-sm font-bold grid place-items-center">
                  <p>N{item.price * (item?.quantity as number)}</p>
                  <button
                    className="border mt-2 text-sm px-2 py-1 border-gold-100 bg-gold-100 text-white font-semibold rounded transition-all duration-300 shadow-md w-full hover:scale-105"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove Item
                  </button>
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
              </li>
            ))}
          </ul>
          <p className="font-semibold text-xl text-right mr-10">
            TOTAL: N{cartTotal}
          </p>
        </>
      )}
    </div>
  );
};

export default Cart;

Cart.getLayout = function getLayout(page: ReactElement) {
  return <Applayout>{page}</Applayout>;
};
