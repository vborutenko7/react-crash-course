import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import AppTheme from './shared-theme/AppTheme.tsx'
import CssBaseline from '@mui/material/CssBaseline';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppTheme>
            <CssBaseline enableColorScheme/>
            <App/>
        </AppTheme>
    </StrictMode>
)
