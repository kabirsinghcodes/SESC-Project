import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import InvoiceDetail from "./pages/invoice-detail";
import Invoice from "./pages/invoice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/invoice",
    element: <Invoice />,
  },
  {
    path: "/invoice/:invoiceid",
    element: <InvoiceDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme
      accentColor="jade"
      radius="full"
      panelBackground="translucent"
      appearance="dark"
    >
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>
);
