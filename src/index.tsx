import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./app/store";
import "./theme/index.scss";

import router from "./router/index";

const container = document.getElementById("root")!;
const root = createRoot(container);

// StrictMode is disabled due to rendering components twice.
// It's a feature not a bug, but still.
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  // </React.StrictMode>,
);
