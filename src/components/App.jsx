import React, { useRef } from 'react';

import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import useStyles from './styles';
import { Actors, Movies, MovieInformation, Profile, NavBar } from './';
import useAlan from './Alan';
const App = () => {
  const classes = useStyles();
  // this is a style hook
  // attaching to the dom
  const alanBtnContainer = useRef();
  useAlan();
  {
    /* as we want navbar to be visible all the time we will use it before the switch which can only show one component at a time. */
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path={['/', '/approved']}>
            <Movies />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default App;
