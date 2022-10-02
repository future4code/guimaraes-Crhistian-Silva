import React from "react";
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from "../global/globalStyle/GlobalStyle";
import { Header } from "../components/header/Hader";
import { MovieDetails } from "../pages/movieDetails/MovieDetails";
import { Home } from "../pages/home/Home";
import { ErrorPage } from "../pages/error/ErrorPage";
export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<ErrorPage />} />
                <Route path='/moviedetails/:id' element={<MovieDetails />} />
            </Routes>
            <GlobalStyle />
        </BrowserRouter>

    );
};
