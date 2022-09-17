//here we are fetching the data
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

//get the base url out of it
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
const page = 1;
export const tmdbApi = createApi({
  // reducer name--> in this case tmdbApi
  reducersPath: 'tmdbApi',
  //   passing the base query of our Api
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  //   specific end points where you want to make a call.
  endpoints: (builder) => ({
    // ****get Genres***//
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}&language=en-US`,
    }),
    // ***Get Movies by [Type]***//
    // creating an end point
    getMovies: builder.query({
      // now we will slipt as per the query
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        // popular, top_rated, upcoming--> ** Get Movies by categories **..

        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === 'string'
        ) {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }
        // 12, 15 16....---> **Get Movies by Genre**
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === 'number'
        ) {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }
        // using SearchQuery--*Get movies by search
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }
        // ** get popular movies
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
    // end point to get a specific movie--> **Get Movie
    getMovie: builder.query({
      query: (id) =>
        `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
    }),
    // movies as user specific list--> ** Get movies
    getRecommendations: builder.query({
      query: ({ movie_id, list }) =>
        `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
    }),
  }),
});
//as we ahve created a query that is "getMovies" inside createApi-->redux toolkit has automatically created a hook for us called useGetMoviesQuery
export const {
  useGetMoviesQuery,
  useGetGenresQuery,
  useGetMovieQuery,
  useGetRecommendationsQuery,
} = tmdbApi;
