import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Projects from "./routes/projects";
import About from "./routes/about";
import Index from "./routes/index";
import Thanks from "./routes/thanks";
import Rewrite from "./routes/rewrite";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Index />},
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "thanks",
        element: <Thanks />
      },
      {
        path: "rewrite",
        element: <Rewrite />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);