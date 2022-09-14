import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genreIdOrCategoryName: '',

    searchQuery: '',
  },
  //   reducers accept the old state as well as action which we will dispatch
  reducers: {
    selectGenreOrCategory: (state, action) => {
      // using redux toolkit, we can now mutate the original state
      state.genreIdOrCategoryName = action.payload;
      // if we want to search for a category, we need to reset our query
      state.searchQuery = '';
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { selectGenreOrCategory, searchMovie } = genreOrCategory.actions;
// exporting the reducer
export default genreOrCategory.reducer;
