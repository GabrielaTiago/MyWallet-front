import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "../hooks";

const UserContext = createContext();

const useUserContext = () => {
  return useContext(UserContext);
};

function UserContextProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", undefined);

  const contextValues = useMemo(() => {
    return { user, setUser };
  }, [user, setUser]);

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
}

export { useUserContext, UserContextProvider };
