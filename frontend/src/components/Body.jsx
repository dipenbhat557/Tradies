import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login.jsx";
import Home from "../Pages/Home.jsx";
import Category from "../components/ServiceCategory.jsx";

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
      path: "/category",
      element: <Category />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
