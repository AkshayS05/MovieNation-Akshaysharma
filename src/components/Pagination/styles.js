import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: '30px 20px',
  },
  pageNumber: {
    margin: '20px !important',
    color: theme.palette.text.primary,
  },
}));
