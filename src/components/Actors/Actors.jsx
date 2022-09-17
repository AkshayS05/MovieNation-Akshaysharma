import React, { useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
// use useParams from react router dom to get the actors' id
// make a new call using redux toolkit query--> get actors detail call....
import { useDispatch, useSelector } from 'react-redux';
import {
  useGetActorDetailsQuery,
  useGetMoviesByActorIdQuery,
} from '../../services/TMDB';
// use newly created useActorHook to get the actors info to the component
import {
  Modal,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  useMediaQuery,
  Rating,
} from '@mui/material';
// styles
import useStyles from './styles';
import { ArrowBack } from '@mui/icons-material';
import { MovieList, Pagination } from '..';
function Actors() {
  const classes = useStyles();
  const id = useParams();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const { data, isFetching, error } = useGetActorDetailsQuery({
    person_id: id.id,
  });
  const { data: movies } = useGetMoviesByActorIdQuery({
    person_id: id.id,
    page,
  });

  if (isFetching) {
    return (
      <Box
        marginleft="8rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <Button
          startIcon={<ArrowBack />}
          onClick={() => history.goBack()}
          color="primary"
        >
          GO back
        </Button>
      </Box>
    );
  }

  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={5} xl={4}>
        <img
          className={classes.image}
          src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
          alt={data?.name}
        />
      </Grid>
      <Grid
        item
        container
        direction="column"
        lg={7}
        xl={8}
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          {data?.name}
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          Born: {new Date(data?.birthday).toDateString()}
        </Typography>
        <Typography variant="body1" align="justify" paragraph>
          {data?.biography || 'Sorry no biography yet ☹'}
        </Typography>
        <Box marginTop="2rem" display="flex" justifyContent="space-around">
          <Button
            variant="contained"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.imdb.com/name/${data?.imdb_id}`}
          >
            IMDB
          </Button>
          <Button startIcon={<ArrowBack />} onClick={() => history.goBack()}>
            Back
          </Button>
        </Box>
      </Grid>
      <Box marginTop="2rem 0" width="100%">
        <Typography variant="h2" align="center" gutterBottom>
          Movies
        </Typography>
        {movies && <MovieList movies={movies} numberOfMovies={12} />}
        {
          <Pagination
            currentPage={page}
            setPage={setPage}
            totalPages={movies?.total_pages}
          />
        }
      </Box>
    </Grid>
  );
}

export default Actors;
