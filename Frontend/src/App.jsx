import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import User from "./components/User";

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "add-user",
          element: <AddUser />,
        },
        {
          path: "users-list",
          element: <UserList />,
        },
        {
          path: "user",
          element: <User />,
        },
      ],
    },
  ]);

  return (
    <div className="min-h-screen w-full">
      <RouterProvider router={routerObj} />
    </div>
  );
}

export default App;