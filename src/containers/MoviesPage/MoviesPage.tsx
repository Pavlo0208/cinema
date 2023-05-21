import React, { useEffect, useState } from "react";
import "./style.css";
import { Header } from "../../components/Header";
import { MovieList } from "../../components/MovieList";
import Search from "../../components/Search/Search";
import { options } from "../../constants/api";
import { Genres } from "../../components/Genres/Genres";

const MoviesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesList, setMoviesList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [showGenres, setShowGenres] = useState(false);

  useEffect(() => {
    if (!searchValue) {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?page=${currentPage}`,
        options
      )
        .then((res) => res.json())
        .then((response) => {
          setMoviesList(response.results);
          setTotalPages(response.total_pages);
        });
    }
  }, [currentPage, searchValue]);

  useEffect(() => {
    if (searchValue) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchValue}&page=${currentPage}`,
        options
      )
        .then((res) => res.json())
        .then((response) => {
          setMoviesList(response.results);
          setTotalPages(response.total_pages);
        });
    }
  }, [searchValue, currentPage]);

  const nextPage = () => {
    if (currentPage === totalPages) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container">
      <Header />
      <Search searchValue={searchValue} setSearch={setSearchValue} />
      <div className="paginations">
        <button className="button" onClick={prevPage}>
          {"Previous Page"}
        </button>
        <button className="genres-button" onClick={() => setShowGenres(true)}>
          {"Genres"}
        </button>
        <button className="button" onClick={nextPage}>
          {"Next Page"}
        </button>
      </div>
      <MovieList movies={moviesList} />

      {showGenres && <Genres onClose={() => setShowGenres(false)} />}
    </div>
  );
};

export { MoviesPage };
