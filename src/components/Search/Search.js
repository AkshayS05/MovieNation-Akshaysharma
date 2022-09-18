import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

// import { searchMovie } from '../../features/currentGenreOrCategory';

// styles
import useStyles from './styles';
const Search = () => {
  const [query, setQuery] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  };
  // this implementation will hide the search bar in case we are not on the home page of the app.
  if (location.pathname != '/') return null;
  return (
    <div className="classes.searchContainer">
      {/* material Ui way of saying input is TextField */}
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
