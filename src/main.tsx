import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { persistStore } from 'redux-persist';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';

import './index.css';
import App from './App';
import theme from './theme';
import { store } from './store/store'

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

