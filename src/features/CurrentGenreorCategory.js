import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genreIdOrCategoryName: '',
    page: 1,
    searchQuery: '',
  },
  //   reducers accept the old state as well as action which we will dispatch
  reducers: {
    selectGenreOrCategory: (state, action) => {
      // using redux toolkit, we can now mutate the original state
      state.genreIdOrCategoryName = action.payload;
    },
  },
});

export const { selectGenreOrCategory } = genreOrCategory.actions;
// exporting the reducer
export default genreOrCategory.reducer;
