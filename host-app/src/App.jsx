import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import StyleProvider from './context/Style';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Body from './components/Body';
import CartContainer from './containers/Cart';

import { StateProvider } from './state';
import { INITIAL_STATE as AUTH_INITIAL_STATE } from './state/auth/reducers';
import { INITIAL_STATE as PRODUCT_INITIAL_STATE } from './state/product/reducers';
import reducers from './state/reducers';

const App = () => {
  const initialState = {
    auth: AUTH_INITIAL_STATE,
    product: PRODUCT_INITIAL_STATE,
  };

  return (
    <StateProvider initialState={initialState} reducer={reducers}>
    <Router>
      <StyleProvider>
        <Layout>
          <CartContainer>
            {cart => <Navbar cart={cart} />}
          </CartContainer>
          <Body/>
        </Layout>
      </StyleProvider>
    </Router>
    </StateProvider>
  );
}

export default App;
