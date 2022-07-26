import React from 'react';
import {store, persistor} from './store';
import {Provider} from 'react-redux';
import NavigationContainer from './navigationContainer';
import {PersistGate} from 'redux-persist/integration/react';
import NetInfoHandler from './utils/netinfo/Netinfo';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NetInfoHandler />
        <NavigationContainer />
      </PersistGate>
    </Provider>
  );
}
