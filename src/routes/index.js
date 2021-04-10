import Home from "../views/Home";
import DetailPage from "../views/DetailPage";
import Error from "../views/Error";

const routes = [
  {
    path: "/home",
    Component: Home,
    header: {
      include: true,
      label: "Home",
    },
    exact: true
  },
  {
    path: "/detail-page",
    Component: DetailPage,
    header: {
      include: true,
      label: "Detail Page",
    },
    exact: false
  },
  {
    path: "*",
    Component: Error,
    exact: false
  },
];

export default routes;
