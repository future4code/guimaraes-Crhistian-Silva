import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage } from "../pages/error/Error";
import { Home } from "../pages/home/Home";


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
};
