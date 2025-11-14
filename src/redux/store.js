import { configureStore } from '@reduxjs/toolkit';

// Import your slices here (You'll add these later)
// import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    // Add other reducers here
  },
});