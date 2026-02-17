import HidingButton from './HidingButton';
import { Stack } from '@mui/material';

export default function HidingButtons() {
    return (
        <Stack spacing={2}>
            {[...Array(10)].map((_, idx) => (
                <HidingButton key={idx}/>
            ))}
        </Stack>
    );
}
