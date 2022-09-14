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
//styles file
import useStyles from './styles';

const Sidebar = ({ SetMobileOpen }) => {
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

  const redLogo =
    'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';

  const blueLogo =
    'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
  return (
    <>
      {/* link going to the home */}
      <Link to="/" className={classes.imageLink}>
        {/* here we will show an image depending upon the theme chosen */}
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="filmpire logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img
                  src={redLogo}
                  className={classes.genreImages}
                  height={30}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img
                  src={redLogo}
                  className={classes.genreImages}
                  height={30}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
