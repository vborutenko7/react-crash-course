import TestStatusesComponent from '../../features/homeWork2/TestStatusesComponent.tsx';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function HomeWork2() {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <Button onClick={() => setIsHidden((isHidden) => !isHidden)}>
        {' '}
        {isHidden ? 'Show' : 'Hide'}{' '}
      </Button>
      {!isHidden && <TestStatusesComponent></TestStatusesComponent>}
    </>
  );
}
