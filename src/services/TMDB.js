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
    // Get Movies by [Type]
    // creating an end point
    getMovies: builder.query({
      query: () => `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
    }),
  }),
});
//as we ahve created a query that is "getMovies" inside createApi-->redux toolkit has automatically created a hook for us called useGetMoviesQuery
export const { useGetMoviesQuery } = tmdbApi;
