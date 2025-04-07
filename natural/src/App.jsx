import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
import { fetchCartData } from "./store/cart-actions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
