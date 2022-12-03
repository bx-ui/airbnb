import { configureStore } from '@reduxjs/toolkit';

import homeSlice from './modules/home';

const store = configureStore({
  devTools: true,
  reducer: {
    home: homeSlice
  }
});

export default store;
