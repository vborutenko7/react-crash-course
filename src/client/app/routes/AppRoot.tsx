import { Outlet } from 'react-router';
import ContentLayout from '../../components/layouts/ContentLayout.tsx';

export const ErrorBoundary = () => {
  return <div>Something went wrong!</div>;
};

const AppRoot = () => {
  return (
    <ContentLayout>
      <Outlet />
    </ContentLayout>
  );
};

export default AppRoot;
