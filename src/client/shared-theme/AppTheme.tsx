import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface AppThemeProps {
    children: React.ReactNode;
}

export default function AppTheme({ children }: AppThemeProps) {
    const customTheme = createTheme({
        cssVariables:true,
        colorSchemes: {
            light: true,
            dark: true,
        }
    });

    return (
        <ThemeProvider theme={customTheme} disableTransitionOnChange>
            {children}
        </ThemeProvider>
    );
}
