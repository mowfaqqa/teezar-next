import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "react-feather";

const Footer = () => {
  return (
    <div className="m-2 border-t border-solid border-gray-300 p-3">
      <div className="bg-white border-b border-solid border-gray-300 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="mb-3 flex flex-col">
          <h5 className="font-dancing text-xl font-bold text-gold-100">Shop</h5>
          <Link href="/bespoke" passHref>
            <span className="text-black">Bespoke</span>
          </Link>
          <Link href="/accessories" passHref>
            <span className="text-black font-roboto ">Accessories</span>
          </Link>
          <Link href="/luxury" passHref>
            <span className="text-black font-roboto">Luxury & Bridal</span>
          </Link>
          <Link href="/" passHref>
            <span className="text-black font-roboto">
              Turban Caps & Headbands
            </span>
          </Link>
          <Link href="/" passHref>
            <span className="text-black font-roboto">Ready To Wear</span>
          </Link>
          <Link href="/" passHref>
            <span className="text-black font-roboto">Kaftan Dresses</span>
          </Link>
          <Link href="/" passHref>
            <span className="text-black font-roboto">Kiddies wears</span>
          </Link>
        </div>
        <div className="mb-3 flex flex-col">
          <h6 className="font-dancing text-xl font-bold text-gold-100">
            Brands
          </h6>
          <Link href="/" passHref>
            <span className="text-black font-roboto">Elegante</span>
          </Link>
          <Link href="/" passHref>
            <span className="text-black font-roboto">Teezar collection</span>
          </Link>
          <Link href="/" passHref>
            <span className="text-black font-roboto">Lorem, ipsum.</span>
          </Link>
          <Link href="/" passHref>
            <span className="text-black font-roboto">Lorem, ipsum.</span>
          </Link>
        </div>
        <div className="mb-3 flex flex-col">
          <h6 className="font-dancing text-xl font-bold text-gold-100">
            Help{" "}
          </h6>
          <Link href="/" passHref>
            <span className="text-black font-roboto">Privacy Policy</span>
          </Link>
          <Link href="/" passHref>
            <span className="text-black font-roboto">Terms and Conditions</span>
          </Link>
          <Link href="/" passHref>
            <span className="text-black font-roboto">Contact Us</span>
          </Link>
          <Link href="/" passHref>
            <span className="text-black font-roboto">FAQs</span>
          </Link>
        </div>
        <div className="mb-3 flex flex-col">
          <h6 className="font-dancing text-xl font-bold text-gold-100">
            Teezar
          </h6>
          <Link href="/" passHref>
            <span className="text-black font-roboto">About Us</span>
          </Link>
          <Link href="/" passHref>
            <span className="text-black font-roboto">Blog</span>
          </Link>
          <Link href="/" passHref>
            <span className="text-black font-roboto">Gallery</span>
          </Link>
        </div>
        <div className="mb-3 flex flex-col">
          <h6 className="font-dancing text-xl font-bold text-gold-100">
            Contact Information
          </h6>
          <span className="flex items-center">
            <PhoneIcon width={20} height={20} className=" text-gold-100" />{" "}
            <p>: 07042829999</p>
          </span>
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
            <p>: teezarfashion@gmail.com</p>
          </span>
          <div className="flex mt-2">
          <Facebook
            size={20}
            fill="white"
            className=" hover:text-gold-100 m-2 hover:fill-gold-100"
          />
          <Instagram size={20} className=" hover:text-gold-100 m-2 " />
          <Twitter
            size={20}
            fill="white"
            className=" hover:text-gold-100 hover:fill-gold-100 m-2"
          />
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
