import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

import Routes from './routes';

const App = () => (
  <>
    <StatusBar braStyle='light-content' backgroundColor='#8B10AE'/>
    <Routes />
  </>
);

export default App;