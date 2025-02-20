import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider as JotaiProvider } from 'jotai';
import { Layout } from '@/components/Layout';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Todos } from '@/pages/Todos';
import './index.css';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary><div>Route Error</div></ErrorBoundary>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'todos',
        element: <Todos />,
      },
      {
        path: 'team',
        element: <div className="text-center text-gray-600 dark:text-gray-300">Team page coming soon</div>,
      },
      {
        path: 'messages',
        element: <div className="text-center text-gray-600 dark:text-gray-300">Messages page coming soon</div>,
      },
      {
        path: 'settings',
        element: <div className="text-center text-gray-600 dark:text-gray-300">Settings page coming soon</div>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
    <About />
  // <StrictMode>
  //   <ErrorBoundary>
  //     <JotaiProvider>
  //       <QueryClientProvider client={queryClient}>
  //         <RouterProvider router={router} />
  //         <ReactQueryDevtools />
  //       </QueryClientProvider>
  //     </JotaiProvider>
  //   </ErrorBoundary>
  // </StrictMode>
);