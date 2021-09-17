import { configureStore } from '@reduxjs/toolkit';
import authSlice from "../features/auth/authSlice"
import postSlice from '../features/post/postSlice';
import profileSettingsSlice from '../features/settings/profileSettingsSlice';

export default configureStore({
  reducer: {
    authentication : authSlice,
    post :postSlice,
    profileSettings:profileSettingsSlice
  },
});
