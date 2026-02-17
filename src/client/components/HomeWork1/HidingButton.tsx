import Button from '@mui/material/Button';
import { useState } from 'react';

type ButtonProps = {
    title: string;
}

export default function HidingButton({ title }: ButtonProps) {
    const [hidden, setHidden] = useState(false);


    return !hidden ? <Button onClick={() => setHidden(true)} variant="contained">Hide me {title}</Button> : null
}