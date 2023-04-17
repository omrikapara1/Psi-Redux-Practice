import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';

import './index.css'
import App from './App';
import theme from './theme';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <Router>
            <App />
          </Router>
        </StyledEngineProvider>
      </ThemeProvider>
);

