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
import { useRouter } from "next/router";

const Hamburger = () => {
  const { loggedUser } = useStateContext();
  const router = useRouter();

  const handleClick = () => {
    if (loggedUser) {
      router.push("/book");
    } else {
      alert('Please sign in for bookings')
    }
  };
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
                <Link href="/categories" passHref>
                  Accessories 
                </Link>
              </li>
              <li>
                <div className="text-white hover:cursor-pointer hover:text-gold-300" onClick={handleClick}>
                  Bookings
                </div>
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
