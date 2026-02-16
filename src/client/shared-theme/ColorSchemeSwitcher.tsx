import { useColorScheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import DarkModeIcon from '@mui/icons-material/DarkModeRounded';


export default function ColorSchemeSwitcher() {
    const { mode, setMode } = useColorScheme();
    
    const icon = mode === 'light' ?   <DarkModeIcon /> : <LightModeIcon />;

    return <IconButton
        onClick={()  => mode === 'light' ? setMode('dark') : setMode('light')}
        size="small"
    >
        {icon}
    </IconButton>

}