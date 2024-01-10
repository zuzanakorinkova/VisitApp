import React from 'react';
import Navigation from './src/navigation';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';
import AuthContextProvider from './src/context/AuthContext';

Amplify.configure(config);

function App(): JSX.Element {
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
}

export default App;
