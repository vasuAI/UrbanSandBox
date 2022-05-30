import React from 'react';
import store from './store';
import {Provider} from 'react-redux';
import NavigationContainer from './navigationContainer';

/**
 * @function App
 * @description
 * @returns
 */
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}
