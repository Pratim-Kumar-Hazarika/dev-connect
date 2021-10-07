import { configureStore } from '@reduxjs/toolkit';
import authSlice from "../features/auth/authSlice"
import followerSlice from '../features/followers/followerSlice';
import followingSlice from '../features/followings/followingSlice';
import postSlice from '../features/post/postSlice';
import profileSettingsSlice from '../features/settings/profileSettingsSlice';
import allUsersSlice from "../features/users/userSlice"
export default configureStore({
  reducer: {
    authentication : authSlice,
    post :postSlice,
    profileSettings:profileSettingsSlice,
    userFollowers :followerSlice,
    userFollowings:followingSlice,
    allUsers :allUsersSlice
  },
});
