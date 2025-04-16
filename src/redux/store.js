import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/Auth"; // authSlice.js dosyasından authReducer'ı içe aktar
import { aboutReducer } from "./slices/Abouts";
import { skillsReducer } from "./slices/Skill"; // languagesSlice.js dosyasından langsReducer'ı içe aktar

const store = configureStore({
  reducer: {
    auth: authReducer,
    abouts: aboutReducer,
    skills: skillsReducer, // skillsReducer'ı buraya ekliyoruz
  },
});

export default store;