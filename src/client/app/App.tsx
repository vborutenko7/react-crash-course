import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './AppTheme.tsx';
import AppAppBar from '../components/AppAppBar.tsx';
import HidingButtons from '../components/HomeWork1/HidingButtons.tsx';


function App() {
    return (
        <>
            <AppTheme>
                <CssBaseline enableColorScheme/>
                <AppAppBar></AppAppBar>
                <HidingButtons/>
            </AppTheme>
        </>
    )
}

export default App
