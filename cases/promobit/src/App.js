import React from 'react'
import { Router } from "./routes/Router"
import { MoviesProvider } from "./global/context/moviesContext";
const App = () => {
  return (
    <MoviesProvider>
      <Router />
    </MoviesProvider>
  )
};

export default App;


