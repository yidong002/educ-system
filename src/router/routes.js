import UseDome from "../views/useDome";
import Home from "../views/home"
import React from "react";
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
  }
];


export default routes;