import React, { useState, useEffect } from 'react';

import {
  CircularProgress,
  Box,
  useMediaQuery,
  Typography,
} from '@mui/material';
//useSelector
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';
import { Movie } from '@mui/icons-material';
import { MovieList } from '..';
import { selectGenreOrCategory } from '../../features/CurrentGenreorCategory';
function Movies() {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.CurrentGenreorCategory,
  );
  // redux provides us other properties including isFetching, error
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please search for something else
        </Typography>
      </Box>
    );
  }
  if (error) return 'An error has occured!';
  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
}

export default Movies;
