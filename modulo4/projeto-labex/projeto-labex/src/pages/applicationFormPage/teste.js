import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { goToHome } from "../../routes/Coordinator";
import { StyleApplicationForm } from "./StyleApplicationForm.js";
import { useRequestData } from "../../components/hooks/useRequestData";
import axios from "axios";
import { BASE_URL } from "../../components/urls/urlBase.js";


export const ApplicationFormPage = () => {

    const navigate = useNavigate();

    const trips = useRequestData(`${BASE_URL}/trips`,[]);

    const novoMap = trips.map((trip)=>{
        return(
            <div>
                aqui vai o retorno
                <select>
                    <option>
                        {trip.name}
                    </option>
                </select>
            </div>
        )
    })

}