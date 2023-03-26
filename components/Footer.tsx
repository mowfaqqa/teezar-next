import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter,  } from "react-feather";

const Footer = () => {
  return (
    <div className="m-2 border-t border-solid border-gray-300 p-3">
      <div className="bg-[#f2f2f2] border-b border-solid border-gray-300 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="mb-3 flex flex-col">
          <h5 className="font-dancing text-xl font-bold text-gold-100">Shop</h5>
          <div >
            <span className="text-black">Bespoke</span>
          </div>
          <div>
            <span className="text-black font-roboto ">Accessories</span>
          </div>
          <div >
            <span className="text-black font-roboto">Luxury & Bridal</span>
          </div>
          <div >
            <span className="text-black font-roboto">
              Turban Caps & Headbands
            </span>
          </div>
          <div >
            <span className="text-black font-roboto">Ready To Wear</span>
          </div>
          <div  >
            <span className="text-black font-roboto">Kaftan Dresses</span>
          </div>
          <div >
            <span className="text-black font-roboto">Kiddies wears</span>
          </div>
        </div>
        <div className="mb-3 flex flex-col">
          <h6 className="font-dancing text-xl font-bold text-gold-100">
            Brands
          </h6>
          <div>
            <span className="text-black font-roboto">Nails By Teezar</span>
          </div>
        </div>
        <div className="mb-3 flex flex-col">
          <h6 className="font-dancing text-xl font-bold text-gold-100" id="contact">
            Contact Information
          </h6>
          <a href="https://api.whatsapp.com/send?phone=8166508998&text=Hello%20Teezar,%20I%27d%20like%20to%20make%20an%20enquiry..." target="_blank" className="flex items-center hover:text-gold-100">
            <PhoneIcon width={20} height={20} className=" text-gold-100" />{" "}
            <p>: 08166508998</p>
          </a>
          <span className="flex items-center">
            <LocationMarkerIcon
              width={20}
              height={20}
              className=" text-gold-100"
            />{" "}
            <p>: Kaduna / Abuja, NG.</p>
          </span>
          <span className="flex items-center">
            <MailIcon width={20} height={20} className=" text-gold-100" />{" "}
            <p>: bintayusuf55@gmail.com</p>
          </span>
          <div className="flex mt-2">
          <a href=" https://m.facebook.com/100059616439281/"  target="_blank">
            <Facebook
              size={20}
              fill="white"
              className=" hover:text-gold-100 m-2 hover:fill-gold-100 hover:cursor-pointer"
            />
          </a>
          <a href="https://www.instagram.com/teezar_fashion/?hl=en" target="_blank">
            <Instagram size={20} className=" hover:text-gold-100 m-2  hover:cursor-pointer" />
          </a>
          <a href=" https://mobile.twitter.com/xarah_bint" target="_blank">
            <Twitter
              size={20}
              fill="white"
              className=" hover:text-gold-100 hover:fill-gold-100 m-2  hover:cursor-pointer"
            />
          </a>
        </div>
        </div>
        
      </div>
      <div className="m-2 p-1 text-center">
        <p className="font-dancing text-sm md:text-xl font-bold text-gold-100">
          {" "}
          &copy; Teezar fashion, 2021
        </p>
      </div>
    </div>
  );
};

export default Footer;
