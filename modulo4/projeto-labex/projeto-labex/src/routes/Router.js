import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage} from "../pages/homePage/HomePage";
import {LoginPage} from "../pages/loginPage/LoginPage";
import {ListTripsPage} from "../pages/listTripsPage/ListTripsPage";
import {TripDetailsPage} from "../pages/tripDetailsPage/TripDetailsPage";
import {AdminHomePage} from "../pages/adminHomePage/AdminHomePage";
import {ApplicationFormPage} from "../pages/applicationFormPage/ApplicationFormPage.js";
import {CreateTripPage} from "../pages/createTripPage/CreateTripPage";
import { ErrorPage } from "../pages/errorPage/ErrorPage";

const Router = () =>{

    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>} />
            <Route path="/trips/list" element={<ListTripsPage/>}/>
            <Route path="/trips/application" element={<ApplicationFormPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/admin/trips/list" element={<AdminHomePage/>}/>
            <Route path="/admin/trips/create" element={<CreateTripPage/>}/>
            <Route path="/admin/trips/:id" element={<TripDetailsPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router