import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth"; // authSlice.js dosyasından authReducer'ı içe aktar

const store = configureStore({
  reducer: {
    auth: authReducer
  },
});

export default store;