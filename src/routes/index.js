import Home from "../views/Home";
import Settings from "../views/Settings";
import DetailPage from "../views/DetailPage";
const routes = [
  {
    path: "/home",
    Component: Home,
    header: {
      include: true,
      label: "Home",
    },
  },
  {
    path: "/settings",
    Component: Settings,
    header: {
      include: true,
      label: "Settings",
    },
  },
  {
    path: "/detail-page",
    Component: DetailPage,
    header: {
      include: true,
      label: "Detail Page",
    },
  }
];

export default routes;
