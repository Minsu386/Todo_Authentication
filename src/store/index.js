import { createAsyncThunk, configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './categoriesSlice';
import todosSlice from './todosSlice';
import authSlice from './authSlice';
import displayUserSlice from './displayUserSlice';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    categories: categoriesSlice.reducer,
    auth: authSlice.reducer,
    displayUser: displayUserSlice.reducer
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger) 
});


const socketActions = {...categoriesSlice.actions, ...todosSlice.actions };

export default store;
export * from './categoriesSlice';
export * from './todosSlice';
export * from './authSlice';
export * from './displayUserSlice'

export {
  socketActions,
};
