import { configureStore } from '@reduxjs/toolkit';
import motoReducer from "../features/moto/motoSlice"

export const store = configureStore({
  reducer: {
    moto: motoReducer,
  },
});
