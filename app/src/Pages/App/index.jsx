import { useRoutes, BrowserRouter } from "react-router-dom";

import Home from "../Home";
import RetoPalindromo from "../RetoPalindromo";
import RetoListaObjetos from '../RetoListaObjetos'
import RetoFizzBuzz from "../RetoFizzBuzz";
import RetoMockup from "../RetoMockup";
import NotFound from "../NotFound";
import Navbar from "../../Components/Navbar";

import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/retoPalindromo", element: <RetoPalindromo /> },
    {path:'/retoListaObjetos',element:<RetoListaObjetos/>},
    { path: "/retoFizzBuzz", element: <RetoFizzBuzz /> },
    { path: "/retoMockup", element: <RetoMockup /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  );
};

export default App;
