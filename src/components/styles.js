import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    // marginLeft: '15rem',

    // [theme.breakpoints.down('sm')]: {
    //   marginLeft: '0rem',
    // },
  },
  toolbar: {
    height: '70px',
  },
  content: {
    flexGrow: '1',
    padding: '2em',
    width: '100%',
  },
}));
