import React from "react";
import style from "./hamburger.module.css";
import Link from "next/link";
import { useStateContext } from "../../context/Context";
import {
  provider,
  auth,
  signInWithRedirect,
  signOut,
} from "../../lib/firebase";

const Hamburger = () => {
  const { loggedUser } = useStateContext();

  const handleSignin = async () => {
    await signInWithRedirect(auth, provider);
    console.log("signed in");
  };
  const handleSignout = async () => {
    await signOut(auth);
    console.log("signed out");
  };
  return (
    <div className={`${style["menu-wrap"]}`}>
      <input type="checkbox" className={`${style.toggler}`} />
      <div className={`${style.hamburger}`}>
        <div></div>
      </div>
      <div className={`${style.menu}`}>
        <div>
          <div>
            <ul>
              <li>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" passHref>
                  Accessories 
                </Link>
              </li>
              <li>
                <Link href="/bookings" passHref>
                  Bookings
                </Link>
              </li>
              {loggedUser && (
                <li>
                  <button
                    className="text-white text-xl my-1 hover:text-gold-300"
                    onClick={handleSignout}
                  >
                    Log Out
                  </button>
                </li>
              )}
              {!loggedUser && (
                <li>
                  <button className="text-white text-xl hover:text-gold-300" onClick={handleSignin}>
                    Log In
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
