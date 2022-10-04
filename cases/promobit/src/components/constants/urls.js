import axios from "axios";
export const BASE_URL = "https://api.themoviedb.org/3/movie"

export const TMDB_KEY = "2b043b8ab5638edfc0f32fd6b83e0ddf"

export const API = axios.create({
   baseURL: 'https://api.themoviedb.org/3/'
});
