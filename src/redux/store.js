import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/Auth"; // authSlice.js dosyasından authReducer'ı içe aktar
import { aboutReducer } from "./slices/Abouts";
import { skillsReducer } from "./slices/Skill"; // languagesSlice.js dosyasından langsReducer'ı içe aktar
import { eduReducer } from "./slices/Education";
import { projectsReducer } from "./slices/Projects"; // projectsSlice.js dosyasından projectsReducer'ı içe aktar
import { contactReducer } from "./slices/Contact"; // contactSlice.js dosyasından contactReducer'ı içe aktar

// Redux store'unu oluşturuyoruz ve reducer'ları ekliyoruz

const store = configureStore({
  reducer: {
    auth: authReducer,
    abouts: aboutReducer,
    skills: skillsReducer, // skillsReducer'ı buraya ekliyoruz
    edus: eduReducer, // edusReducer'ı buraya ekliyoruz
    projects: projectsReducer, // projectsReducer'ı buraya ekliyoruz
    contact: contactReducer, // contactReducer'ı buraya ekliyoruz
  
  },
});

export default store;