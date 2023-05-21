export interface IMovie {
  title: string;
  overview: string;
  id: string;
  poster_path: string;
  genre_ids: number[];
  vote_average: number;
}

export interface IGenres {
  id: number;
  name: string;
}
