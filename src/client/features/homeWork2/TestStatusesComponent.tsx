import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

console.log('TestStatusesComponent is loaded');

export default function TestStatusesComponent() {

    const [isGreen, setIsGreen] = useState(false);


    console.log('TestStatusesComponent render in body');

    useEffect(() => {
        console.log('TestStatusesComponent useEffect');
        return () => {
            console.log('TestStatusesComponent useEffect cleanup');
        }
    })

    useEffect(() => {
        console.log('TestStatusesComponent useEffect [] (mounted)');
        return () => {
            console.log('TestStatusesComponent useEffect [] cleanup (unmounted)');
        }
    }, [])

    useEffect(() => {
        console.log('TestStatusesComponent useEffect [state] ');
        return () => {
            console.log('TestStatusesComponent useEffect [state] cleanup ');
        }
    }, [isGreen])


    return <Box sx={{
        border: '1px solid blue',
        display: 'inline-block',
        color: isGreen ? 'green' : 'red',
    }}>Test Statuses Component <Button onClick={() => setIsGreen(isGreen => !isGreen)}>Change color</Button> </Box>
}