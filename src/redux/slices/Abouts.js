import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

// Aboutları almak için
export const fetchAbouts = createAsyncThunk("about/fetchAbouts", async () => {
  const { data } = await axios.get("/abouts/getAll");
  return data;
});

// About silme işlemi
export const fetchRemoveAbout = createAsyncThunk(
  "about/fetchRemoveAbout",
  async (id) => {
    const { data } = await axios.delete(`/abouts/del/${id}`);
    return data; // sadece temiz veri döner
  }
);

// About oluşturma işlemi
export const fetchCreateAbout = createAsyncThunk(
  "about/fetchCreateAbout",
  async (aboutData) => {
    const { data } = await axios.post("/abouts/create", aboutData);
    return data; // yeni oluşturulan about objesi
  }
);

// About güncelleme işlemi (Edit işlemi için ekliyoruz)
export const fetchUpdateAbout = createAsyncThunk(
  "about/fetchUpdateAbout",
  async (updatedAboutData) => {
    const { data } = await axios.patch(`/abouts/update/${updatedAboutData.id}`, updatedAboutData);
    return data; // güncellenen about objesi
  }
);

const initialState = {
  abouts: {
    items: [],
    status: "loading",
  },
};

const aboutsSlice = createSlice({
  name: "abouts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Aboutları alırken
      .addCase(fetchAbouts.pending, (state) => {
        state.abouts.status = "loading";
      })
      .addCase(fetchAbouts.fulfilled, (state, action) => {
        state.abouts.items = action.payload;
        state.abouts.status = "loaded";
      })
      .addCase(fetchAbouts.rejected, (state) => {
        state.abouts.items = [];
        state.abouts.status = "error";
      })
      // Silme işleminde: veriyi güncelledikten sonra state'i düzenle
      .addCase(fetchRemoveAbout.fulfilled, (state, action) => {
        const removedId = action.meta.arg; // dispatch sırasında gönderdiğin id
        state.abouts.items = state.abouts.items.filter(
          (obj) => obj._id !== removedId // silinen objeyi filter ile kaldır
        );
      })
      // Silme işlemi pending durumu, frontend'de herhangi bir etki yaratmamalı
      .addCase(fetchRemoveAbout.pending, (state) => {
        state.abouts.status = "loading"; // Silme işlemi yapılırken "loading" durumu
      })
      .addCase(fetchCreateAbout.pending, (state) => {
        state.abouts.status = "loading"; // Yeni about eklenirken "loading" durumu
      })
      // About eklerken state'i güncelle
      .addCase(fetchCreateAbout.fulfilled, (state, action) => {
        state.abouts.items = [...state.abouts.items, action.payload];
        state.abouts.status = "loaded";
        state.abouts.error = null; // Hata varsa temizle
      })
      .addCase(fetchCreateAbout.rejected, (state) => {
        state.abouts.status = "error";
      })
      // About güncellerken state'i güncelle
      .addCase(fetchUpdateAbout.fulfilled, (state, action) => {
        const updatedAbout = action.payload; // Güncellenen about objesi
        state.abouts.items = state.abouts.items.map((item) =>
          item._id === updatedAbout._id ? updatedAbout : item
        );
        state.abouts.status = "loaded";
      })
      .addCase(fetchUpdateAbout.rejected, (state) => {
        state.abouts.status = "error";
      });
  },
});

export const aboutReducer = aboutsSlice.reducer;
