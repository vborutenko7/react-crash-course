import AppAppBar from '../appAppBar/AppAppBar.tsx';
import { ReactNode } from 'react';
import Container from '@mui/material/Container';

type ContentLayoutProps = {
  children: ReactNode;
};
export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <>
      <AppAppBar></AppAppBar>
      <Container>{children}</Container>
    </>
  );
}
