import Home from "@pages/home";
import BottomNavBar from "@components/navBar/bottomNavBar";
import Chat from "@pages/chat";
import MyPage from "@pages/myPage";
import Sell from "@pages/sell";
import Products from "@pages/products";
import { Outlet, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Outlet />
        <BottomNavBar />
      </div>
    ),
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/sell",
        element: <Sell />
      },
      {
        path: "/chat",
        element: <Chat />
      },
      {
        path: "/myPage",
        element: <MyPage />
      }
    ]
  }
]);

export default router;
