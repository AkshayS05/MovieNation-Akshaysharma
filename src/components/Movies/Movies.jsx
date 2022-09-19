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

import { MovieList, Pagination, FeaturedMovies } from '..';

const Movies = () => {
  // this is for pagination
  const [page, setPage] = useState(1);

  //this hook is use to identify if we are on a specific screen size and can add a breakpoint accordingly.
  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));
  const numberOfMovies = lg ? 17 : 19;
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
      <FeaturedMovies movie={data.results[0]} />
      <MovieList movies={data} numberOfMovies={numberOfMovies} excludeFirst />
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={data.total_pages}
      />
    </div>
  );
};

export default Movies;
