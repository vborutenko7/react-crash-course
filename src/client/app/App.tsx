import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './AppTheme.tsx';
import AppAppBar from '../components/AppAppBar.tsx';

function App() {
  return (
    <>
      <AppTheme>
        <CssBaseline enableColorScheme/>
        <AppAppBar></AppAppBar>
      </AppTheme>
    </>
  )
}

export default App
