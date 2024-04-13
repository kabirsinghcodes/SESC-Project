import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import About from "./pages/about";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Signup from "./pages/signup";
import ProfilePage from "./pages/profile";
import CoursesPage from "./pages/courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/courses",
    element: <CoursesPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
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
