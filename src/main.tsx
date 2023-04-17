import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './theme';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store/store'
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import './index.css'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <Router>
            <App />
          </Router>
        </StyledEngineProvider>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

