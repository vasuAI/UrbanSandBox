import React from 'react';
import {store, persistor} from './store';
import {Provider} from 'react-redux';
import NavigationContainer from './navigationContainer';
import {PersistGate} from 'redux-persist/integration/react';
import {StatusBar} from 'react-native';
import {Color} from './utils';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer />
        <StatusBar
          backgroundColor={Color.pureWhite}
          barStyle={'dark-content'}
        />
      </PersistGate>
    </Provider>
  );
}
