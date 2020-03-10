import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const user = useSelector(state => state.user);
  return (
    <div>
      <h1>{user.username ? user.username : null}Profile</h1>
    </div>
  );
}
