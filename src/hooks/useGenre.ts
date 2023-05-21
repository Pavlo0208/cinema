import { useEffect, useState } from "react";
import { options } from "../constants/api";

export const useGenres = () => {
  const [genres, setGeneres] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/genre/movie/list", options)
      .then((res) => res.json())
      .then((response) => setGeneres(response.genres));
  }, []);

  return genres;
};
