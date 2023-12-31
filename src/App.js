import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import Home from "./components/Home";
import ProtectedRoutes from "./routes/ProtectedRoutes";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} exact />
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
