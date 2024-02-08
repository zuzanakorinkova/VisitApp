import React from 'react';
import Navigation from './src/navigation';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';
import AuthContextProvider from './src/context/AuthContext';
import Client from './src/apollo/Client';

Amplify.configure(config);

function App(): JSX.Element {
  return (
    <AuthContextProvider>
      <Client>
        <Navigation />
      </Client>
    </AuthContextProvider>
  );
}

export default App;
