import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import CreateBooks from "../pages/CreateBooks";
import MyBooks from "../pages/MyBooks";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "all-books", Component: AllBooks },
      { path: "create-books", Component: CreateBooks },
      { path: "my-books", Component: MyBooks },
    ],
  },
]);

export default Router;
