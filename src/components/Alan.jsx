import React, { useEffect, useContext } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { ColorModeContext } from '../utils/ToggleColorMode';
import { fetchToken } from '../utils';

import {
  selectGenreOrCategory,
  searchMovie,
} from '../features/CurrentGenreorCategory';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const AIkey = process.env.REACT_APP_ALAN_KEY;

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    alanBtn({
      key: AIkey,
      onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
        if (command === 'chooseGenre') {
          // look if the genre exists
          const foundGenre = genres.find(
            (g) => g.name.toLowerCase() === genreOrCategory.toLowerCase(),
          );
          if (foundGenre) {
            if (foundGenre === 'horror') {
              setMode('light');
              history.push('/');
              dispatch(selectGenreOrCategory(foundGenre.id));
            } else {
              history.push('/');
              dispatch(selectGenreOrCategory(foundGenre.id));
            }
          } else {
            // the command found is not a genre thus it can be :-->
            // Top Rated, Upcoming or Popular
            const category = genreOrCategory.startsWith('top')
              ? 'top_rated'
              : genreOrCategory;
            history.push('/');
            dispatch(selectGenreOrCategory(category));
          }
        } else if (command === 'changeMode') {
          if (mode === 'light') {
            setMode('light');
          } else {
            setMode('dark');
          }

          // Call the client code that will react to the received command
        } else if (command === 'login') {
          fetchToken();
        } else if (command === 'logout') {
          localStorage.clear();
          history.pushState('/');
        } else if (command === 'search') {
          dispatch(searchMovie(query));
        }
      },
    });
  }, []);
};

export default useAlan;
