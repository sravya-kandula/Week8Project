import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import RootLayout from "./components/RootLayout";
import UsersList from "./components/UsersList";
import User from "./components/User";
import AddUser from "./components/AddUser";

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "users-list",
          element: <UsersList />,
        },
        {
          path: "user",
          element: <User />,
        },
        {
          path: "add-user",
          element: <AddUser />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routerObj} />;
}

export default App;