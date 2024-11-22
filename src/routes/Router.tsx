import { Navigate, createBrowserRouter } from "react-router-dom";
import Coin from "../components/detail/Coin";
import Chart from "../components/detail/chart/Chart";
import Price from "../components/detail/price/Price";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:coinId",
    element: <Coin />,
    children: [
      {
        path: "/:coinId",
        element: <Navigate to="chart" />,
      },
      {
        path: "/:coinId/price",
        element: <Price />,
      },
      {
        path: "/:coinId/chart",

        element: <Chart />,
      },
    ],
  },
]);
