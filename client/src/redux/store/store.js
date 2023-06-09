import user from '../slices/userSlice'
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    user,
  },
});