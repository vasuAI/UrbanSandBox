import React from 'react';
import {store, persistor} from './store';
import {Provider} from 'react-redux';
import NavigationContainer from './navigationContainer';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer />
      </PersistGate>
    </Provider>
  );
}
