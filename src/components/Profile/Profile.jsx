import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
// get access to profile name or id from redux state
//display in the profile component
import { setUser, userSelector } from '../../features/auth';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { useGetListQuery } from '../../services/TMDB';
import { RatedCards } from '..';
function Profile() {
  const { user } = useSelector(userSelector);
  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({
    listName: 'favorite/movies',
    sessionId: localStorage.getItem('session_id'),
    accountId: user.id,
    page: 1,
  });
  const { data: watchlistMovies, refetch: refecthWatchlisted } =
    useGetListQuery({
      listName: 'watchlist/movies',
      sessionId: localStorage.getItem('session_id'),
      accountId: user.id,
      page: 1,
    });
  useEffect(() => {
    refetchFavorites();
    refecthWatchlisted();
  }, []);
  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <Box marginLeft="8rem">
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies?.results?.length && !watchlistMovies?.results?.length ? (
        <Typography variant="h5">
          Add favorites or watchlist some movies to see them here
        </Typography>
      ) : (
        <Box>
          <RatedCards title="Favorite Movies" data={favoriteMovies} />
          <RatedCards title="Watchlist Movies" data={watchlistMovies} />
        </Box>
      )}
    </Box>
  );
}

export default Profile;
