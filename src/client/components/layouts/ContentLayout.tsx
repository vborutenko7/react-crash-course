import AppAppBar from '../appAppBar/AppAppBar.tsx';
import { ReactNode } from 'react';

type ContentLayoutProps = {
  children: ReactNode;
};
export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <>
      <AppAppBar></AppAppBar> {children}
    </>
  );
}
