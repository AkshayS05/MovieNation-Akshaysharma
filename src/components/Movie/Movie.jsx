import React from 'react';

import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Movie = ({ movie, i }) => {
  const classes = useStyles();

  return (
    // for instance on medium devices we can fit three images, thus 3 *4=12
    // on extra small screens we want this particular movie to take 12 spaces to display
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      {/* this logic i+1 will make ist element load within 250 milliseconds, then the next one in 500ms, and so on. */}
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
          {/* {movie.poster_path */}
          <img
            alt={movie.title}
            className={classes.image}
            src={
              movie.poster_path
                ? `https://images.tmdb.org/t/p/w500/${movie.poster_path}`
                : 'https://www.fillmurray.com/200/300'
            }
          />

          {/* { :<img alt={movie.title} className{classes.image} src="https://www.fillmurray.com/200/300"/>} } */}

          {/* above we can see a repetition of image tags, thus instead of using ternary operations on the whole, use it on the link and change it according to the condition */}
          <Typography className={classes.title} variant="h5">
            {movie.title}
          </Typography>
          {/* here we divided by 2 as actual rating is out of 10 and we want to show out of 5 only. */}
          <Tooltip disableTouchListener title={`${movie.vote_average}/10`}>
            {/* Tooltips display informative text when users hover over, focus on, or tap an element. */}
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;
