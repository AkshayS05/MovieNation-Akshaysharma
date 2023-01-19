import React, { useEffect } from 'react';

import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from '@mui/material';

import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
// getGenresQuery
import { useGetGenresQuery } from '../../services/TMDB';
//styles file
import useStyles from './styles';

import genreIcons from '../../assets/genres';
import { ClassNames } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/CurrentGenreorCategory';

// images
import logo from '../../assets/images/MovieNation.png';
import logo2 from '../../assets/images/MovieNationdark.png';
const Sidebar = ({ setMobileOpen }) => {
  //access to specific theme variables
  const theme = useTheme();
  // to use styles
  const classes = useStyles();
  const categories = [
    {
      label: 'Popular',
      value: 'popular',
    },
    {
      label: 'Top Rated',
      value: 'top_rated',
    },
    { label: 'Upcoming', value: 'upcoming' },
  ];
  const demoCategories = [
    {
      label: 'Action',
      value: 'action',
    },
    {
      label: 'Comedy',
      value: 'comedy',
    },
    { label: 'Animation', value: 'animation' },
    { label: 'Horror', value: 'horror' },
  ];

  const redLogo =logo2;

  const blueLogo =logo;

  const { data, isFetching } = useGetGenresQuery();

  // this will alow us to dispatch action-- transfer specific data from our component to our redux
  const dispatch = useDispatch();
  // useSelector will retrieve our data
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.CurrentGenreorCategory,
  );

  //to close the sidebar
  useEffect(() => {
    setMobileOpen(false);
  }, [genreIdOrCategoryName]);
  return (
    <>
      {/* link going to the home */}
      <Link to="/" className={classes.imageLink}>
        {/* here we will show an image depending upon the theme chosen */}
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? blueLogo : redLogo}
          alt="MoviesNation logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {/* {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : ( */}
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem
              onClick={() => {
                dispatch(selectGenreOrCategory(value));
              }}
              button
            >
              <ListItemIcon>
                <img
                  src={genreIcons[label.toLowerCase()]}
                  className={classes.genreImages}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Link key={name} className={classes.links} to="/">
              <ListItem
                onClick={() => {
                  dispatch(selectGenreOrCategory(id));
                }}
                button
              >
                <ListItemIcon>
                  <img
                    src={genreIcons[name.toLowerCase()]}
                    className={classes.genreImages}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  );
};

export default Sidebar;
