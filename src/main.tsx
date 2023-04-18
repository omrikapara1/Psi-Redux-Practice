import ReactDOM from 'react-dom/client';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';

import 'styles/index.css';
import theme from 'styles/theme';
import App from 'components/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
            <App />
        </StyledEngineProvider>
    </ThemeProvider>
);
