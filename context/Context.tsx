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
  isLogged: boolean
};

const stateContext = createContext({} as StateContext);

export function Context({ children }: Children) {
  const [loggedUser, setloggedUser] = useState<any>(false);
  const [isLogged, setIsLogged] = useState<any>(false);

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
        setIsLogged(true);
      } else {
        localStorage.removeItem("authUser");
        setloggedUser(false);
        setIsLogged(true);

      }
    });
  }, []);

  return (
    
      <stateContext.Provider value={{ loggedUser, isLogged }}>
        {children}
      </stateContext.Provider>
    
  );
}

export const useStateContext = () => useContext(stateContext);
