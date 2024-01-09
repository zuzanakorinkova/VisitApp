import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type AuthUserType = boolean | undefined | null;

type AuthContextType = {
  isSignedIn: AuthUserType;
  setIsSignedIn: Dispatch<SetStateAction<AuthUserType>>;
};

const AuthContext = createContext<AuthContextType>({
  isSignedIn: undefined,
  setIsSignedIn: () => {},
});

// Check if it's needed to useEffect in order to make sure user stays signed in after refresh/closed application

const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const [isSignedIn, setIsSignedIn] = useState<AuthUserType>(undefined);
  return (
    <AuthContext.Provider value={{isSignedIn, setIsSignedIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
