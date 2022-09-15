import axios from 'axios';

// using axios instance to make the call.
export const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: process.env.REACT_APP_TMDB_KEY },
});
export const fetchToken = async () => {
  try {
    // user authentication
    // as we need data from response, we are using it by destructuring.
    // 1. make a request to authenticate new token
    const { data } = await moviesApi.get('/authentication/token/new');
    //get a token
    const token = data.request_token;
    if (data.success) {
      // log the user in
      localStorage.setItem('request_token', token);
      //   redirect to the moviedb with the authentication using that token
      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
    }
  } catch (error) {
    console.log('Sorry, your token cannot be created 😥');
  }
};

//creating a session after authentication
export const createSessionId = async () => {
  const token = localStorage.getItem('request_token');
  if (token) {
    try {
      const {
        data: { session_id },
      } = await moviesApi.post('authentication/session/new', {
        request_token: token,
      });

      localStorage.setItem('session_id', session_id);
      return session_id;
    } catch (error) {
      console.log(error);
    }
  }
};
