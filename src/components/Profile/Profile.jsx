import React from 'react';
import { useSelector } from 'react-redux';
// get access to profile name or id from redux state
//display in the profile component
import { setUser, userSelector } from '../../features/auth';

function Profile() {
  const { user } = useSelector(userSelector);

  return <div>{user.username}</div>;
}

export default Profile;
