import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;