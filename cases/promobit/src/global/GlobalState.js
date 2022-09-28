import React, { useState, useEffect } from "react";
import { POPULAR_URL } from "../../components/constants/urlBase";
import axios from "axios";
import { getFilmsData } from "../components/functions/getFilmsData";
import { sortFilms } from "../components/functions/sortFilms";

const  GlobalStateContext = React.createContext()

export const GlobalState = (props) => {

    const limit = 30
    const [filmsList, setFilmsList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [totalPages, setTotalPages] = useState(0)
    const [offset, setOffset] = useState(0)
    

  const getFilms = async () => {
    setLoading(true);
    try {
      const data  = await getFilmsData(limit, offset) 

      const newArrayPokemons = [];
      setTotalPages(data.count)

      for (let pokemon of data.results) {
        const pokemonDetails = (await axios.get(`${POPULAR_URL}${pokemon.name}`)).data;
        newArrayPokemons.push(pokemonDetails);
      }
      setFilmsList(sortFilms(newArrayPokemons))

    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFilms();
  }, [totalPages, offset]);



  return (
    <GlobalStateContext.Provider  value={[
        filmsList,
        setFilmsList,
        loading,
        error,
        totalPages,
        setTotalPages,
        offset,
        setOffset,
        limit,
      ]}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}






