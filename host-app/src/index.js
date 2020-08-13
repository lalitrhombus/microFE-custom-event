import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { applyPolyfills, defineCustomElements } from 'stencil-component-poc/loader';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

applyPolyfills().then(() => {
  defineCustomElements(window);
});