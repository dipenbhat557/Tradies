import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login.jsx";
import Register from "./Regsiter.jsx";
import Home from "../Pages/Home.jsx";

function Body() {
  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
      },
    {
       
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
