import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, userSelector } from '../../features/auth';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  useMediaQuery,
  Avatar,
  Drawer,
} from '@mui/material';

import { useTheme } from '@mui/styles';
// icons from material UI
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';

import { Link } from 'react-router-dom';
import { Search } from '..';
import { fetchToken, createSessionId, moviesApi } from '../../utils';
import { Sidebar } from '..';
//styles file
import useStyles from './styles';

function NavBar() {
  // const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { isAuthenticated, user } = useSelector(userSelector);

  // css usage hook
  const classes = useStyles();
  const theme = useTheme();
  // state used in a navbar
  const [mobileOpen, setMobileOpen] = useState(false);

  // useMediaQuery is also coming from materialUI
  // anything above 600px is not mobile

  const isMobile = useMediaQuery('(max-width:600px)');

  //get the token as well as session id
  const token = localStorage.getItem('request_token');
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');
  const dispatch = useDispatch();
  console.log(user);
  //useEffect hook which will trigger ones the token is changed
  useEffect(() => {
    // get the user data
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          // function call where we will get back our user data.
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionIdFromLocalStorage}`,
          );
          dispatch(setUser(userData));
        } else {
          // create the session id which will be handled by the function in the fetch token
          const sessionId = await createSessionId();
          //ones created if not already we can call the same url
          const { data: userData } = await moviesApi.get;
          `/account?session_id=${sessionId}`;
          dispatch(setUser(userData));
        }
        // after the session has been created.Now, we need to disoatch this data to the redux in order to maintain/store this state.--auth.js
      }
    };
    logInUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {/* if display is mobile */}
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          {/* sx== providing inline styles */}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {/* to make it work use useTheme from mui  */}
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {/* if not mobile then render search component */}
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                {/* &nsp is a space sign */}
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/${user.id}`}
                className={classes.linkButton}
                onClick={() => {}}
              >
                {/* if we are not on a mobile device */}
                {!isMobile && <>My Movies &nbsp; </>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://thumbs.dreamstime.com/z/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg"
                />
              </Button>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className="classes.drawer">
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              // when you want to overwrite the underline pieces of components, you use classes.paper
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              // {/* as we want the sidebar to be visible always on the desktop device, we will make variant to be permanen. Also it should always be visible so use open without any condition */}
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              open
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
}

export default NavBar;
