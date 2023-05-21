import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoviesPage } from "./containers/MoviesPage";
import { MoviesByGenre } from "./containers/MovieByGenre/MovieByGenre";
import { Movie } from "./containers/Movie/Movie";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MoviesPage} />
        <Route path="/genres/:id" Component={MoviesByGenre} />
        <Route path="/movies/:id" Component={Movie} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
