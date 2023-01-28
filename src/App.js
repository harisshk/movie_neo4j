import React from "react";
import MovieList from "./Components/Movie";
import movies from './movieData.json'
import './App.css'
export const App = () => {
  return(
    <MovieList movies={movies} />
  )
}

export default App