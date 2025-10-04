import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/HomePage";
import FacebookBoost from "./pages/FacebookBoost";
import BusinessConsulting from "./pages/BusinessConsulting";
import BrandPageSetup from "./pages/BrandPageSetup";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("/services.json");
          const data = await res.json();
          // console.log("Loader fetched:", data);
          return data;
        },
        element: <Home />,
      },
      {
        path: "service/facebook-boosting",
        // loader: () => fetch("/services.json"),
        // Component: ServicePageLayout,
        element: <FacebookBoost />,
      },
      {
        path: "service/business-consulting",
        // loader: () => fetch("/services.json"),
        // Component: ServicePageLayout,
        element: <BusinessConsulting />,
      },
      {
        path: "service/brand-page-setup",
        // loader: () => fetch("/services.json"),
        // Component: ServicePageLayout,
        element: <BrandPageSetup />,
      },
      /* {
        path: "auth",
        Component: AuthLayout,
        children: [
          { path: "login", Component: Login },
          { path: "register", Component: Register },
        ],
      },
      {
        path: "concerts",
        children: [
          { index: true, Component: ConcertsHome },
          { path: ":city", Component: ConcertsCity },
          { path: "trending", Component: ConcertsTrending },
        ],
      }, */
    ],
  },
]);
export default router;
