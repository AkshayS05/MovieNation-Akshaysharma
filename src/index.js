import React from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
//to use redux
import { Provider } from 'react-redux';
import ToggleColorModeProvider from './utils/ToggleColorMode';
import App from './components/App';
import './index.css';

//improting redux toolskit store and provide it to the provider which can further provide it to the app.
import store from './App/store';

ReactDOM.render(
  // in order to ue theme we need to wrap our components
  // in order to ue redux we need to wrap our components--check store.js inside app folder
  <Provider store={store}>
    <ToggleColorModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      ,
    </ToggleColorModeProvider>
    ,
  </Provider>,

  document.getElementById('root'),
);
