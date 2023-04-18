import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';

import 'styles/index.css';
import theme from 'styles/theme';
import App from 'components/App';
import { store } from 'store/store';

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
                <StyledEngineProvider injectFirst>
                    <App />
                </StyledEngineProvider>
            </ThemeProvider>
        </PersistGate>
    </Provider>
);
