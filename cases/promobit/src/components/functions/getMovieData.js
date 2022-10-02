import { BASE_URL, TMDB_KEY } from "../constants/urls"

export const getMoviesDetailsData= async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}?api_key=${TMDB_KEY}&append_to_response=videos&language=pt-BR`)
       return await response.json()
    }
    catch (error){
        console.log("error", error)
    }
}

export const getMoviesReleaseDate = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}/release_dates?api_key=${TMDB_KEY}`)
        return await response.json()
    }
    catch (error){
        console.log("error", error)
    }
}

export const getMoviesCredits= async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}/credits?api_key=${TMDB_KEY}`)
       return await response.json()
    }
    catch (error){
        console.log("error", error)
    }
}

export const getMoviesRecomendations = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}/recommendations?api_key=${TMDB_KEY}&language=pt-BR&page=1`)
       return await response.json()
    }
    catch (error){
        console.log("error", error)
    }
}
