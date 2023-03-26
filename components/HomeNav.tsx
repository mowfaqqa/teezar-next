import React, { useEffect, useState } from "react";
import Link from "next/link";
import { LogOut, ShoppingCart } from "react-feather";
import { provider, auth, signInWithRedirect, signOut } from "../lib/firebase";
import Hamburger from "./hamburger/Hamburger";
import { useStateContext } from "../context/Context";
// @ts-ignore
import { useCart } from "react-use-cart";
import { useRouter } from "next/router";

const HomeNav = () => {
  const { loggedUser, isLogged } = useStateContext();
  const [render, setRender] = useState(false);
  const { totalUniqueItems } = useCart();
  const router = useRouter();

  useEffect(() => {
    setRender(true);
  }, []);

  const handleClick = () => {
    if (loggedUser) {
      router.push("/book");
    } else {
      alert('Please sign in for bookings')
    }
  };
  const handleSignin = async () => {
    await signInWithRedirect(auth, provider);
  };
  const handleSignout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <div className="h-fit w-full overflow-hidden">
        {isLogged && (
          <div className="hidden md:block bg-transparent border-b border-solid border-white px-6 top-0 z-10 hover:bg-black ">
            <div className="bg-transparent pb-2 mb-3 flex justify-between items-center">
              <div className="grid grid-cols-[80px_80px_80px] w-1/3 justify-start flex-1">
                {/* <div className="text-white grid gap-3">
                <Search
                  size={25}
                  className="text-white hover:text-gold-100 w-8 transition-all duration-300 ease-linear cursor-pointer"
                />
                Search
              </div> */}
                <Link href="/cart" passHref>
                  <div className="relative">
                    <div className="w-5 h-5 rounded-full bg-red-600 text-white text-sm absolute bottom-7 right-11 grid place-items-center cursor-pointer ">
                      {render ? totalUniqueItems : ""}
                    </div>
                    <div className="text-white grid gap-3">
                      <ShoppingCart
                        size={25}
                        className="text-white hover:text-gold-100  transition-all duration-300 ease-linear cursor-pointer"
                      />
                      Cart
                    </div>
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
                    className=" text-white border-2 rounded font-medium px-10 py-1 tracking-widest mx-3  hover:text-gold-100  hover:border-gold-100 transition-all duration-300 ease-linear"
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
              <Link href="/" passHref>
                <span className="text-white text-base px-4 hover:text-gold-200 transition-all duration-300 ease-linear hover:cursor-pointer">
                  Home
                </span>
              </Link>
              <div onClick={handleClick}>
                <span className="text-white text-base px-4 hover:text-gold-200 transition-all duration-300 ease-linear hover:cursor-pointer">
                  Bookings
                </span>
              </div>
              <Link href="/products" passHref>
                <span className="text-white text-base px-4 hover:text-gold-200 transition-all duration-300 ease-linear hover:cursor-pointer">
                  Accessories
                </span>
              </Link>
            </ul>
          </div>
        )}

        {/* mobile view */}
        {isLogged && (
          <div className="md:hidden grid grid-cols-3 justify-between items-center border-b border-solid border-white px-1">
            <div className="ml-5 grid grid-cols-2 justify-start">
              {/* <Link href="/search" passHref>
              <Search
                size={20}
                className="text-white hover:text-gold-100 w-8 transition-all duration-300 ease-linear cursor-pointer"
              />
            </Link> */}
              <Link href="/cart" passHref>
                <div className="relative">
                  <div className="w-5 h-5 rounded-full bg-red-600 text-white text-sm absolute top-2 left-4 grid place-items-center cursor-pointer">
                    {render ? totalUniqueItems : ""}
                  </div>

                  <ShoppingCart
                    size={20}
                    className="text-white hover:text-gold-300  transition-all duration-300 ease-linear cursor-pointer"
                  />
                </div>
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
            <div className="text-center">
              <h1 className="text-white text-6xl font-dancing hover:cursor-pointer">
                <Link href="/">
                  <span>Teezar</span>
                </Link>
              </h1>
              <h6 className="text-white text-base font-dancing my-2">
                Fashion
              </h6>
            </div>
            <div className="justify-self-end">
              {!loggedUser ? (
                <button
                  type="button"
                  onClick={handleSignin}
                  className="mt-8 text-white border rounded font-medium px-3 w-[100px] md:text-sm text-xs mr-4 font-nunito py-1 tracking-widest hover:text-gold-100  hover:border-gold-100 transition-all duration-300 ease-linear"
                >
                  Sign In
                </button>
              ) : (
                <div className="">
                  <img
                    src={loggedUser?.photoURL}
                    alt="user"
                    className="w-8 h-8 mt-6 rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              <Hamburger />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeNav;
