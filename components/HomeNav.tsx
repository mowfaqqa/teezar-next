import React from "react";
import Link from "next/link";
import { LogOut, Search, ShoppingCart } from "react-feather";
import { provider, auth, signInWithRedirect, signOut } from "../lib/firebase";
import Hamburger from "./hamburger/Hamburger";
import { useStateContext } from "../context/Context";

const HomeNav = () => {
  const { loggedUser } = useStateContext();

  const handleSignin = async () => {
    await signInWithRedirect(auth, provider);
    console.log("signed in");
    // console.log(loggedUser);
  };
  const handleSignout = async () => {
    await signOut(auth);
    console.log("signed out");
  };

  console.log(loggedUser);

  return (
    <div>
      <div className="h-fit w-full ">
        <div className="hidden md:block bg-transparent border-b border-solid border-white px-6 top-0 z-10 hover:bg-black ">
          <div className="bg-transparent pb-2 mb-3 flex justify-between items-center">
            <div className="grid grid-cols-[80px_80px_80px] w-1/3 justify-start flex-1">
              <Link href="/search" passHref>
                <div className="text-white grid gap-3">
                  <Search
                    size={25}
                    className="text-white hover:text-gold-100 w-8 transition-all duration-300 ease-linear cursor-pointer"
                  />
                  Search
                </div>
              </Link>
              <Link href="/products" passHref>
                <div className="text-white grid gap-3">
                  <ShoppingCart
                    size={25}
                    className="text-white hover:text-gold-100  transition-all duration-300 ease-linear cursor-pointer"
                  />
                  Cart
                </div>
              </Link>
              {loggedUser && (
                <div className="text-white grid gap-3">
                  <button
                    onClick={handleSignout}
                    className=" text-white hover:text-gold-100 transition-all duration-300 ease-linear font-medium"
                  >
                    <LogOut size={25} />
                  </button>
                  Sign out
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="text-center m-1">
                <h1 className="text-white text-8xl font-dancing hover:text-gold-100 transition-all duration-300 ease-linear">
                  <Link href="/">Teezar</Link>
                </h1>
                <h6 className="text-white text-xl font-dancing my-2">
                  Fashion
                </h6>
              </div>
            </div>
            <div className=" flex justify-end mx-2 flex-1">
              {!loggedUser ? (
                <button
                  type="button"
                  onClick={handleSignin}
                  className="text-white border-2 rounded font-medium px-10 py-1 tracking-widest mx-3  hover:text-gold-100  hover:border-gold-100 transition-all duration-300 ease-linear"
                >
                  Sign In
                </button>
              ) : (
                <div className="grid gap-1 mt-8">
                  <img
                    src={loggedUser?.photoURL}
                    alt="user"
                    className="w-12 h-12 rounded-full justify-self-end"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-white font-medium tracking-wide text-xl mb-3">
                    Welcome, {loggedUser?.displayName}
                  </div>
                </div>
              )}
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
          <div className="grid grid-cols-[50px_50px_50px] justify-start flex-1">
            <Link href="/search" passHref>
              <Search
                size={20}
                className="text-white hover:text-gold-100 w-8 transition-all duration-300 ease-linear cursor-pointer"
              />
            </Link>
            <Link href="/products" passHref>
              <ShoppingCart
                size={20}
                className="text-white hover:text-gold-100  transition-all duration-300 ease-linear cursor-pointer"
              />
            </Link>
            {loggedUser && (
              <button
                onClick={handleSignout}
                className=" text-white hover:text-gold-100 transition-all duration-300 ease-linear font-medium"
              >
                <LogOut size={20} />
              </button>
            )}
          </div>
          <div className="text-center m-1 flex-1">
            <h1 className="text-white text-7xl font-dancing">
              <Link href="/">Teezar</Link>
            </h1>
            <h6 className="text-white text-base font-dancing my-2">Fashion</h6>
          </div>
          <div className="flex flex-1 justify-end mx-2">
            {!loggedUser ? (
              <button
                type="button"
                onClick={handleSignin}
                className="text-white border-2 rounded font-medium px-7 text-sm font-nunito py-1 tracking-widest mx-3  hover:text-gold-100  hover:border-gold-100 transition-all duration-300 ease-linear"
              >
                Sign In
              </button>
            ) : (
              <div className="">
                <img
                  src={loggedUser?.photoURL}
                  alt="user"
                  className="w-11 h-11 rounded-full justify-self-end"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            <Hamburger />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
