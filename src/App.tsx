import React from "react";
import {
  ActionFunction,
  createBrowserRouter,
  LoaderFunction,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "@/components/Layout/Layout.tsx";
import { IRoute, Pages } from "@/types/route.ts";
const pages: Pages = import.meta.glob("./pages/**/*.tsx", { eager: true });
const routes: IRoute[] = [];

for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
  if (!fileName) continue;

  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");

  const pageComponent = pages[path]?.default;
  if (!pageComponent) {
    console.error(
      `Component for path ${path} is not found or not exported correctly.`,
    );
    continue;
  }

  routes.push({
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader as LoaderFunction | undefined,
    action: pages[path]?.action as ActionFunction | undefined,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}

// Layout을 최상위 라우트로 추가
const router = createBrowserRouter([
  {
    path: "/", // Layout의 루트 경로
    element: <Layout />,
    children: routes.map(({ Element, ErrorBoundary, ...rest }) => ({
      ...rest,
      element: <Element />,
      ...(ErrorBoundary && {
        errorElement: React.createElement(ErrorBoundary),
      }),
    })),
  },
]);

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
