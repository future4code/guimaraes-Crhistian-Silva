/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { createContext, useEffect, useState } from "react"
import { api } from '../../services/api';

export const MoviesContext = createContext([]);

export function MoviesProvider(props) {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [filters, setFilters] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();


    const [page, setPage] = useState(1);

    useEffect(() => {
        setLoading(true)
        try {
            api.get(`movie/popular?api_key=146396b763924a689540bfc1189f3c63&language=pt-BR&page=${page}`)
            .then(response => setMovies(response.data.results))
        
            api.get('genre/movie/list?api_key=146396b763924a689540bfc1189f3c63&language=pt-BR')
            .then(response => setGenres(response.data.genres)); 
            // console.log(movies);
        } catch (error) {
            setError(error);
            console.log(error);
        }
        finally{
            setLoading(false)
        }
        
    }, [page]);

    useEffect(() => {
        setLoading(true)
        try {
            let filteredMovies = [];

            movies.map((movie) => {
                for(let filter of filters) {
                    if (movie.genre_ids.includes(filter)) {
                        filteredMovies = [...filteredMovies , movie];
                        break
                    }
                }
            })
            setFilteredMovies(filteredMovies);
            // console.log(filteredMovies);
        } catch (error) {
            setError(error);
            console.log(error);
        } finally{
        setLoading(false)
    }
        
    }, [filters]);

    function handleFilterGenres(genre) {
       if (filters.includes(genre)){
            const index = filters.indexOf(genre);

            if (index === 0) {
                setFilters([...filters.slice(index + 1)]);
            } else {
                setFilters([...filters.slice(0, index), ...filters.slice(index + 1)])
            }
        } else {
            setFilters([...filters, genre])
        }    
        // console.log(filters);
    }

    return (
        <MoviesContext.Provider
            value={{
                genres,
                movies,
                filters,
                filteredMovies,
                setPage,
                handleFilterGenres,
                loading,
                error,
                
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
}