import Head from "next/head";
import { Tool, Facebook, Instagram, Twitter, Phone } from "react-feather";
import Applayout from "../components/Applayout";
import React, { ReactElement } from "react";
import { Context } from "../context/Context";
import { useStateContext } from "../context/Context";

type Props = {};

export default function book({}: Props) {
  const { loggedUser } = useStateContext();
  return (
    <Context>
      <Head>
        <title>Teezar_Fashion | Booking </title>
      </Head>
      <div className="h-[80vh] w-[100vw] flex justify-center items-center ">
        <div className="w-[50%] h-[50%]">
          <div className="text-center">
            <Tool className="mx-auto mb-1 text-gold-100"/> <span>
              <span className="text-gold-100 font-bold">Hello {loggedUser?.displayName}</span>. Sorry our payment system is currently under maintenance.
              Contact me on my socials to proceed with your booking. Thank you
            </span>
          </div>
          <div className="flex mt-2 mx-auto justify-center">
            <a href=" https://m.facebook.com/100059616439281/" target="_blank">
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
            <a href=" https://mobile.twitter.com/xarah_bint" target="_blank">
              <Twitter
                size={25}
                fill="white"
                className=" text-blue-500 hover:fill-blue-500  m-2  hover:cursor-pointer"
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=8166508998&text=Hello%20Teezar,%20I%27d%20like%20to%20make%20an%20enquiry..."
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
      </div>
    </Context>
  );
}

book.getLayout = function getLayout(page: ReactElement) {
  return <Applayout>{page}</Applayout>;
};
