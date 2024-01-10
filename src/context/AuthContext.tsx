import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {getCurrentUser} from 'aws-amplify/auth';
import {Hub} from 'aws-amplify/utils';
import {HubCallback} from '@aws-amplify/core';

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

  useEffect(() => {
    const checkUser = async () => {
      try {
        const authUser = await getCurrentUser();
        if (authUser) {
          setIsSignedIn(true);
        }
      } catch (e) {
        setIsSignedIn(undefined);
      }
    };
    checkUser();
  }, [isSignedIn]);

  useEffect(() => {
    const listener: HubCallback = data => {
      const {event} = data.payload;
      if (event === 'signedOut') {
        setIsSignedIn(undefined);
      }
    };
    const subscription = Hub.listen('auth', listener);
    return () => subscription();
  }, [isSignedIn]);

  return (
    <AuthContext.Provider value={{isSignedIn, setIsSignedIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
