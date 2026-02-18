import { createBrowserRouter, RouterProvider } from 'react-router';
import AppRoot from './routes/AppRoot.tsx';


const router =
    createBrowserRouter([
        {
            path: "/", Component: AppRoot, children: [
                { index: true, element: <div>Default</div> },
                { path: "/home", element: <div>Hello worlds</div> },
                { path: "/homework1", lazy: () => import('./routes/HomeWork1').then(m => ({ Component: m.default })) }


            ]
        },
    ]);

export const AppRouter = () => {
    return <RouterProvider router={router}/>;
};
