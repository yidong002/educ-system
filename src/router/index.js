/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import NotFound from "../errorPage/404"
import Redirect from './Redirect'

const RouterObject = () => {
  return (
    <Routes>
      {
        routes.map(item => {
          return (
            <>
              <Route key={item.path} path={item.path} element={item.component}></Route>
              <Route key="redirect-home" path="/" element={<Redirect to="/home" />}></Route>
              <Route key="404" path="*" element={<NotFound />}></Route>
            </>
          )
        })
      }
    </Routes>
  )
}

export default RouterObject;