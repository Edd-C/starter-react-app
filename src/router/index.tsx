import { createBrowserRouter } from "react-router-dom";

import BasicLayout from "../routes/layouts/BasicLayout";
import ErrorPage from "../routes/ErrorPage";
import CounterFeature from "../routes/CounterFeature";
import Home from "../routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "counter",
        element: <CounterFeature />,
      },
    ],
  },
]);
export default router;
