import React from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from './components/App';
// to use theme
const theme = createTheme({});
//to use redux
import { Provider } from 'react-redux';
//improting redux toolskit store and provide it to the provider which can further provide it to the app.
import store from './App/store';

ReactDOM.render(
  // in order to ue theme we need to wrap our components
  // in order to ue redux we need to wrap our components--check store.js inside app folder
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      ,
    </ThemeProvider>
    ,
  </Provider>,

  document.getElementById('root'),
);
