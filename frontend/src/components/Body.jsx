import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login.jsx";
<<<<<<< HEAD
=======
import Signup from "../Pages/Signup.jsx"
>>>>>>> 1c49f52feb5167c29741c82f5511e4f15e60ce0e
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
<<<<<<< HEAD
      path: "/category",
      element: <Category />,
    },
=======
      path: "/signup",
      element: <Signup />,
    },
    {
      path:"/category",
      element:<Category/>
    },
   
>>>>>>> 1c49f52feb5167c29741c82f5511e4f15e60ce0e
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
