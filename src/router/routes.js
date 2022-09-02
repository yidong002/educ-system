/* eslint-disable react/react-in-jsx-scope */
import UseDome from "../views/useDome";
import Home from "../views/home";
import DropDown from "../views/DropDown/index";
import Pagination from "../views/Pagination";
import Echarts from "../views/EchartsPage"
const routes = [
  {
    path: "/useDome",
    title: "UseDome",
    component: <UseDome/>
  },
  {
    path: "/home",
    title: "Home",
    component: <Home/>
  },
  {
    path: "/dropDown",
    title: "DropDown",
    component: <DropDown/>
  },
  {
    path: "/pagination",
    title: "Pagination",
    component: <Pagination />
  },
  {
    path: "/echarts",
    title: "Echarts",
    component: <Echarts />
  }
];


export default routes;