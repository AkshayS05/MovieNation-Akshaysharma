import React, { useState } from 'react';
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
import { Sidebar } from '..';
//styles file
import useStyles from './styles';
function NavBar() {
  // css usage hook
  const classes = useStyles();
  const theme = useTheme();
  // state used in a navbar
  const [mobileOpen, setMobileOpen] = useState(false);

  // useMediaQuery is also coming from materialUI
  // anything above 600px is not mobile

  const isMobile = useMediaQuery('(max-width:600px)');
  const isAuthenticated = true;

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
              <Button color="inherit" onClick={() => {}}>
                {/* &nsp is a space sign */}
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/profile/:id"
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
