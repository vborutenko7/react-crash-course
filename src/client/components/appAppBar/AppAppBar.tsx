import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ColorSchemeSwitcher from './ColorSchemeSwitcher.tsx';
import { Link as RouterLink } from 'react-router';

export default function AppAppBar() {
  return (
    <AppBar
      enableColorOnDark
      sx={{
        position: 'relative',
        bgcolor: 'transparent',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}
          >
            <Box sx={{ display: { display: 'flex' } }}>
              <Button
                component={RouterLink}
                to="/home"
                color="info"
                size="small"
              >
                Home
              </Button>
              <Button
                component={RouterLink}
                to="/homework1"
                color="info"
                size="small"
              >
                Home work 1
              </Button>
              <Button
                component={RouterLink}
                to="/homework2"
                color="info"
                size="small"
              >
                Home work 2
              </Button>
              <Button
                component={RouterLink}
                to="/weather"
                color="info"
                size="small"
              >
                Weather
              </Button>
              <Button
                component={RouterLink}
                to="/cars"
                color="info"
                size="small"
              >
                Cars
              </Button>
            </Box>
          </Box>
          <Box>
            <ColorSchemeSwitcher />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
