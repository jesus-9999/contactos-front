import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./routes/Home";
/* import Home from './routes/Home'; */
/* 
import Home from './routes/Home';
import Register from './routes/Regiser';
import Contacts from './routes/Contacts'; */

/* const router= createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/Register',
    element:<Register/>
  },
  {
    path:'/Contacts',
    element:<Contacts/>
  },
]) */

const cookieValue = document.cookie
  .split("; ")
  .find((row) => row.startsWith("token_contacts="))
  ?.split("=")[1];
function handleClick() {
  document.cookie =
    "token_contacts=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
}
const root = ReactDOM.createRoot(document.getElementById("root"));

if (
  !cookieValue |
  (cookieValue == null) |
  (cookieValue === 0) |
  (cookieValue === "")
) {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  root.render(
    <React.StrictMode>
       <button className="btn btn-danger col-3" onClick={handleClick}>salir</button>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
      
    </React.StrictMode>
  );
}
