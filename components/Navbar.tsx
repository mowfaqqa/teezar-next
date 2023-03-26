import Link from "next/link";
import { LogOut } from "react-feather";
import { provider, auth, signInWithRedirect, signOut } from "../lib/firebase";
import Hamburger from "./hamburger/Hamburger";
import { useStateContext } from "../context/Context";
import { useRouter } from "next/router";




const Navbar2 = () => {
  const { loggedUser, isLogged } = useStateContext();
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
    <div>
      <div className="bg-head-pattern h-fit w-full shadow-lg overflow-hidden">
        {isLogged && <div className="hidden md:block bg-transparent border-b border-solid px-6 top-0 z-10 hover:bg-black ">
          <div className="bg-transparent pb-2 mb-3 flex justify-between items-center">
            <div className="grid md: grid-cols-2 md:grid-cols-3 w-1/3 justify-start flex-1">
              {/* <div className="text-white grid">
                <Search
                  size={25}
                  className="text-white hover:text-gold-100 w-8 transition-all duration-300 ease-linear cursor-pointer"
                />
                Search
              </div> */}
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
            <div className=" flex-auto md:flex-1">
              <div className="text-center m-1">
                <h1 className="text-white text-base md:text-8xl font-dancing hover:text-gold-100 transition-all duration-300 ease-linear">
                  <Link href="/">Teezar</Link>
                </h1>
                <h6 className="text-white text-sm font-dancing my-2">
                  Fashion
                </h6>
              </div>
            </div>
            <div className="md:flex justify-end mx-2 flex-1">
              {!loggedUser ? (
                <button
                  type="button"
                  onClick={handleSignin}
                  className="hidden md:block text-white border-2 rounded font-medium px-10 py-1 tracking-widest mx-3  hover:text-gold-100  hover:border-gold-100 transition-all duration-300 ease-linear"
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
                  {loggedUser?.displayName}
                  </div>
                </div>
              )}
            </div>
          </div>
          <ul className="hidden pb-2 md:flex justify-center items-center">
            <Link href="/" passHref>
              <a className="text-white text-base px-4 hover:text-gold-200 transition-all duration-300 ease-linear">
                Home
              </a>
            </Link>
            <div onClick={handleClick}>
              <a className="text-white text-base px-4 hover:text-gold-200 transition-all duration-300 ease-linear hover:cursor-pointer">
                Bookings
              </a>
            </div>
            <Link href="/products" passHref>
              <a className="text-white text-base px-4 hover:text-gold-200 transition-all duration-300 ease-linear">
                Accessories
              </a>
            </Link>
          </ul>
        </div>}

        {/* mobile view */}
        {isLogged && <div className="md:hidden flex justify-between items-center border-b border-solid border-white px-2">
          <div className="grid grid-cols-[50px_50px] justify-start flex-1 ml-2">
            
            {loggedUser && (
              <button
                onClick={handleSignout}
                className=" text-white hover:text-gold-300 transition-all duration-300 ease-linear font-medium"
              >
                <LogOut size={20} />
              </button>
            )}
          </div>
          <div className="text-center m-1">
            <h1 className="text-white text-6xl font-dancing">
              <Link href="/">Teezar</Link>
            </h1>
            <h6 className="text-white text-sm font-dancing my-2">Fashion</h6>
          </div>
          <div className=" flex justify-end mx-2">
            {!loggedUser ? (
              <button
                type="button"
                onClick={handleSignin}
                className=" text-white border-2 rounded font-medium px-7 text-sm py-1 tracking-widest mx-3  hover:text-gold-100  hover:border-gold-100 transition-all duration-300 ease-linear"
              >
                Sign In
              </button>
            ) : (
              <div className="">
                <img
                  src={loggedUser?.photoURL}
                  alt="user"
                  className="w-8 mt-6 h-8 rounded-full justify-self-end"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
            <Hamburger />
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Navbar2;
