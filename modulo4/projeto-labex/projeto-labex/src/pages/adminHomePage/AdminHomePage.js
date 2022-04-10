import React, { useEffect, useState } from "react";
import "./StyleAdminHomePage.js";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";
import { goToCreateTrip } from "../../routes/Coordinator";
import { StyleAdminHomePage } from "./StyleAdminHomePage.js";
import { useProtectedPage } from "../../components/hooks/useProtectedpage";
import { BASE_URL } from "../../components/urls/urlBase.js";
import axios from "axios";
import { SpinnerJs } from "../../components/spinner/spinner.js";


export const AdminHomePage = () => {
  useProtectedPage();

  const navigate = useNavigate();

  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState()

  useEffect(() => {
    getTripList();
  }, []);

  const getTripList =  async () => {
    setLoading(true)
    try {
      const { data } = await 
      axios.get(`${BASE_URL}/trips`);
      setTrips(data.trips);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };


  const returnTrips =
  trips && trips.map((trip) => {
    return (
      <div className="lista-p">
        <p key={trip.id} onClick={() => goToTripDetails(trip.id)}>
          {trip.name}
        </p>
        <svg className="icone" onClick={() => delTrip(trip.id)}>
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
        </svg>
      </div>
    );
  });

  const delTrip = async (id) => {
    const token = localStorage.getItem("token");
    const headers = { headers: { auth: token } };

    if (window.confirm("Deseja Deletar A Viagem Selecionada ?")) {
      try {
        const response = await axios.delete(`${BASE_URL}/trips/${id}`, headers);
        getTripList();
        window.alert(" Viagem Deletada Com Sucesso");
      } catch (err) {}
    }
  };
  const delToken = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const goToTripDetails = (id) => {
    navigate(`/admin/trips/${id}`);
  };

  return (
    <StyleAdminHomePage>
      <div className="container-lista">
        <h1> Painel Administrativo</h1>
        <div className="retorno-lista">
          <button onClick={() => goToHome(navigate)}> Voltar ao Inicio</button>
          <button onClick={() => goToCreateTrip(navigate)}> Criar</button>
          <button onClick={delToken}> Logout</button>
        </div>
                {loading && <SpinnerJs />}
        {!loading && error && <h2>Ocorreu Um Erro na Requisição</h2>}
        {!loading && trips && trips.length > 0 && returnTrips}
        {!loading && trips && trips.length === 0 && (
          <h2> Não há Nenhuma Viagem</h2>
        )}
      </div>
    </StyleAdminHomePage>
  );
};
