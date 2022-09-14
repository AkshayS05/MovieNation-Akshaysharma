import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';
import genreOrCategoryReducer from '../features/CurrentGenreorCategory';
//  call configure store and pass reducer to it.
//our reducer is actually a service we created.
export default configureStore({
  //here we need to specify what data are we going to we deal with
  //whether it si going to be genre? action?
  //   whenever you use a special services thing, like the toolkit, query-->you have to add that as a reducer with the specific name like:  reducersPath: 'tmdbApi',
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    CurrentGenreorCategory: genreOrCategoryReducer,
  },
});
