import { createSlice } from '@reduxjs/toolkit';

// creating the initial state
const initialState = {
  user: {},
  isAuthenticated: false,
  sessionId: '',
};
const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      (state.user = action.payload),
        (state.isAuthenticated = true),
        (state.sessionId = localStorage.getItem('session_id'));

      localStorage.setItem('account_id', action.payload.id);
    },
  },
});
export const { setUser } = authSlice.actions;
//exporting whole in order to connect it to the redux store
export default authSlice.reducer;

export const userSelector = (state) => state.user;
