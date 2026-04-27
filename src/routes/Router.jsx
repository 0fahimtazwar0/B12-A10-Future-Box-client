import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import CreateAndUpdateBook from "../pages/CreateAndUpdateBook";
import MyBooks from "../pages/MyBooks";
import Login from "../pages/Login";
import Register from "../pages/register";
import BookDetails from "../pages/BookDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      { path: "all-books", Component: AllBooks },
      { path: "create-book", Component: CreateAndUpdateBook },
      { path: "my-books", Component: MyBooks },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      {
        path: "*",
        element: (
          <p className='h-screen w-full flex justify-center items-center text-6xl'>
            404
          </p>
        ),
      },
      {
        path: "update-book/:id",
        element: <CreateAndUpdateBook updating={true}></CreateAndUpdateBook>,
      },

      { path: "book-details/:id", Component: BookDetails },
    ],
  },
]);

export default Router;
