import { createBrowserRouter, RouterProvider } from 'react-router';
import AppRoot from './routes/AppRoot.tsx';

const router = createBrowserRouter([
  {
    Component: AppRoot,
    children: [
      { index: true, element: <div>Default</div> },
      { path: '/home', element: <div>Hello worlds</div> },
      {
        path: '/homework1',
        lazy: () =>
          import('./routes/HomeWork1').then((m) => ({ Component: m.default })),
      },
      {
        path: '/homework2',
        lazy: () =>
          import('./routes/HomeWork2').then((m) => ({ Component: m.default })),
      },
      {
        path: '/weather',
        lazy: () =>
          import('./routes/Weather').then((m) => ({ Component: m.default })),
      },
      {
        path: '/cars',
        lazy: () =>
          import('./routes/Cars').then((m) => ({ Component: m.default })),
      },
      {
        path: '/cars/add',
        lazy: () =>
          import('./routes/AddNewCar.tsx').then((m) => ({
            Component: m.default,
          })),
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
