import Home from "../views/Home";
import DetailPage from "../views/DetailPage";
const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/detail-page",
    Component: DetailPage
  }
];

export default routes;
