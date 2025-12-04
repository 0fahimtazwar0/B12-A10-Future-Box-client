import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
]);

export default Router;
