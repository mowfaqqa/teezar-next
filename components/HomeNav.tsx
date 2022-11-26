import React from "react";
import Link from "next/link";
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { Facebook, Instagram, Twitter } from "react-feather";
import Hamburger from "./hamburger/Hamburger";

const HomeNav = () => {
  return (
    <div>
      <div className="h-fit w-full ">
        <div className="hidden md:block bg-transparent border-b border-solid border-white px-6 top-0 z-10 hover:bg-black ">
          <div className="bg-transparent pb-2 mb-3 flex justify-between items-center">
            <div className="flex justify-start">
              <Facebook
                size={30}
                fill="white"
                className="text-white hover:fill-gold-100 hover:text-gold-100 w-8 mx-2 transition-all duration-300 ease-linear"
              />
              <Instagram
                size={30}
                className="text-white hover:text-gold-100 w-8 mx-2 transition-all duration-300 ease-linear"
              />
              <Twitter
                size={30}
                fill="white"
                className="text-white hover:fill-gold-100 hover:text-gold-100 w-8 mx-2 transition-all duration-300 ease-linear"
              />
            </div>
            <div>
              <div className="text-center m-1">
                <h1 className="text-white text-8xl font-dancing hover:text-gold-100 transition-all duration-300 ease-linear">
                  <Link href="/">Teezar</Link>
                </h1>
                <h6 className="text-white text-xl font-dancing my-2">
                  Fashion
                </h6>
              </div>
            </div>
            <div className="icons flex justify-end mx-2">
              <Link href="/user" passHref>
                <span>
                  <UserIcon className="text-white transition-all duration-300 ease-linear hover:text-gold-100 w-8 mx-2" />
                </span>
              </Link>
              <Link href="/search" passHref>
                <SearchIcon className="text-white hover:text-gold-100 w-8 mx-2 transition-all duration-300 ease-linear" />
              </Link>
              <Link href="/products" passHref>
                <ShoppingBagIcon className="text-white hover:text-gold-100 w-8 mx-2 transition-all duration-300 ease-linear" />
              </Link>
            </div>
          </div>
          <ul className="hidden pb-2 md:flex justify-center items-center">
            <Link href="/home" passHref>
              <a className="text-white text-base px-4 hover:text-gold-200 transition-all duration-300 ease-linear">
                Home
              </a>
            </Link>
            <Link href="/shop" passHref>
              <a className="text-white text-base px-4 hover:text-gold-200 transition-all duration-300 ease-linear">
                Shop
              </a>
            </Link>
            <Link href="/accessories" passHref>
              <a className="text-white text-base px-4 hover:text-gold-200 transition-all duration-300 ease-linear">
                Accessories
              </a>
            </Link>
            <Link href="/collections" passHref>
              <a className="text-white text-base px-4 hover:text-gold-200 transition-all duration-300 ease-linear">
                Collections
              </a>
            </Link>
          </ul>
        </div>
        {/* mobile view */}
        <div className="md:hidden flex justify-between items-center border-b border-solid border-white px-2">
          <div className="icons flex justify-end mx-2">
            <Link href="/" passHref>
              <UserIcon className="w-5 text-white  mx-1 cursor-pointer" />
            </Link>
            <Link href="/products" passHref>
              <ShoppingBagIcon className="w-5 text-white  mx-1 cursor-pointer" />
            </Link>
          </div>
          <div className="text-center m-1">
            <h1 className="text-white text-8xl font-dancing">
              <Link href="/">Teezar</Link>
            </h1>
            <h6 className="text-white text-sm font-dancing my-2">Fashion</h6>
          </div>
          <div className="icons flex justify-end mx-2">
            <Link href="/" passHref>
              <SearchIcon className="w-5 text-white  mx-1 cursor-pointer" />
            </Link>
            <Hamburger />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
