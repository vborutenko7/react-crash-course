import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { dataDisplayCustomizations } from './customizations/dataDisplay.tsx';
import { feedbackCustomizations } from './customizations/feedback.tsx';
import { navigationCustomizations } from './customizations/navigation.tsx';
import { surfacesCustomizations } from './customizations/surfaces.ts';
import { colorSchemes, typography } from './themePrimitives.ts';
import { inputsCustomizations } from './customizations/inputs.tsx';

interface AppThemeProps {
    children: React.ReactNode;
    disableCustomTheme?: boolean;
    themeComponents?: ThemeOptions['components'];
}

export default function AppTheme(props: AppThemeProps) {
    const { children, disableCustomTheme, themeComponents } = props;
    const theme = React.useMemo(() => {
        return disableCustomTheme
            ? {}
            : createTheme({
                cssVariables: {
                    colorSchemeSelector: 'data-mui-color-scheme',
                    cssVarPrefix: 'template',
                },
                colorSchemes: {
                    light: true,
                    dark: true,
                },
                 //colorSchemes, 
                // typography,
                // components: {
                //     // ...inputsCustomizations,
                //     ...dataDisplayCustomizations,
                //     ...feedbackCustomizations,
                //     ...navigationCustomizations,
                //     ...surfacesCustomizations,
                //     ...themeComponents,
                // },
            });
    }, [disableCustomTheme, themeComponents]);
    console.log(theme);
    if(disableCustomTheme) {
        return <React.Fragment>{children}</React.Fragment>;
    }
    return (
        <ThemeProvider theme={theme} disableTransitionOnChange>
            {children}
        </ThemeProvider>
    );
}
