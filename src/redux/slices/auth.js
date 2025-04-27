import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import Cookies from "js-cookie";

// Asenkron işlem (API çağrısı)
export const fetchAuth = createAsyncThunk("auth/fetchAuth", async (params) => {
  const { data } = await axios.post("/auth/login", params); // Backend'e istek
  return data; // Backend'den gelen veri
});

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const { data } = await axios.get("/auth/me"); // Me endpoint'ine istek
  return data; // Kullanıcı verisi
});

export const fetchLogout = createAsyncThunk("auth/fetchLogout", async () => {
  await axios.post("/auth/logout"); // sunucu tarafında token'ı temizle
});


// Initial state (Başlangıç durumu)
const initialState = {
  data: null, // Başlangıçta kullanıcı verisi yok
  status: "loading", // Başlangıçta veri yükleniyor
};

// Slice
const authSlice = createSlice({
  name: "auth", // Slice adı
  initialState, // Başlangıç durumu
  reducers: {
    logout: (state) => {
      state.data = null; // Kullanıcı çıkış yaptığında state sıfırlanır
      Cookies.remove("token");
    },
  },
  extraReducers: (builder) => {
    // Asenkron işlemlerle ilgili reducer'lar
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.status = "loading"; // Veri yükleniyor
        state.data = null; // Veri yok
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.data = action.payload; // Başarılı sonuçta kullanıcı verisi state'e eklenir
        state.status = "loaded"; // Veri yüklendi
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.status = "error"; // Hata durumunda
        state.data = null; // Kullanıcı verisi sıfırlanır
      })
      .addCase(fetchAuthMe.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(fetchAuthMe.fulfilled, (state, action) => {
        state.status = "loaded";
        state.data = action.payload;
      })
      .addCase(fetchAuthMe.rejected, (state, action) => {
        state.status = "error";
        state.data = null;
        console.log('Fetch error:', action.payload); // Hata mesajını console'a yazdır
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.data = null; // State temizlenir
        Cookies.remove("token"); // Localdeki cookie de silinir
      });
  },
  
});

// Reducer export'u
export const { logout } = authSlice.actions;

export const authReducer = authSlice.reducer;

// Selector'lar
export const selectIsAuth = (state) => Boolean(state.auth.data);
