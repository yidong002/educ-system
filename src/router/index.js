import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import React from 'react';


const RouterObject = () => {
  return (
    <Routes>
      {
        routes.map(item => {
          return (
            <>
              <Route key={item.path} path={item.path} element={item.component}></Route>
            </>
          )
        })
      }
    </Routes>
  )
}

export default RouterObject;