import React from 'react';

import { Grid } from '@mui/material';
import useStyles from './styles';
import { Movie } from '..';

const MovieList = ({ movies, numberOfMovies }) => {
  // to get styles
  const classes = useStyles();

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(0, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
