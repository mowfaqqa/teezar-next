import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth, onAuthStateChanged } from "../lib/firebase";

type Children = {
  children: ReactNode;
};

type StateContext = {
  loggedUser: any;
};

const stateContext = createContext({} as StateContext);

export function Context({ children }: Children) {
  const [loggedUser, setloggedUser] = useState<any>(false);

  useEffect(() => {
    const ISSERVER = typeof window === "undefined";
    if (!ISSERVER) {
      try {
        setloggedUser(JSON.parse(localStorage.getItem("authUser") || ""));
      } catch (error) {}
    }

    onAuthStateChanged(auth, (user : any) => {
      // store the user in localstorage
      if (user) {
        localStorage.setItem("authUser", JSON.stringify(user));
        setloggedUser(user);
      } else {
        localStorage.removeItem("authUser");
        setloggedUser(false);
      }
    });
  }, []);

  return (
    
      <stateContext.Provider value={{ loggedUser }}>
        {children}
      </stateContext.Provider>
    
  );
}

export const useStateContext = () => useContext(stateContext);
