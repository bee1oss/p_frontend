import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";



export const fetchEdus = createAsyncThunk("edus/fetchEdus", async () => {
    const { data } = await axios.get("/edus/getAll");
    return data;
});

export const fetchCreateEdu = createAsyncThunk(
    "edus/fetchCreateEdu",
    async (eduData) => {
        const { data } = await axios.post("/edus/create", eduData);
        return data; // yeni oluşturulan edu objesi
    }
);

export const fetchUpdateEdu = createAsyncThunk(
    "edus/fetchUpdateEdu",
    async (updatedEduData) => {
        const { data } = await axios.patch(`/edus/update/${updatedEduData.id}`, updatedEduData);
        return data; // güncellenen edu objesi
    }
);

export const fetchRemoveEdu = createAsyncThunk(
    "edus/fetchRemoveEdu",
    async (id) => { await axios.delete(`/edus/del/${id}`);
        return id; // sadece temiz veri döner
    }
);


const initialState = {
    edus: {
        items: [],
        status: "loading",
    },
};

const edusSlice = createSlice({
    name: "edus",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
          // Edulari alırken
          .addCase(fetchEdus.pending, (state) => {
            state.edus.status = "loading";
          })
          .addCase(fetchEdus.fulfilled, (state, action) => {
            state.edus.items = action.payload;
            state.edus.status = "loaded";
          })
          .addCase(fetchEdus.rejected, (state) => {
            state.edus.items = [];
            state.edus.status = "error";
          })
          // Silme işleminde: veriyi güncelledikten sonra state'i düzenle
          .addCase(fetchRemoveEdu.fulfilled, (state, action) => {
            const removedId = action.meta.arg; // dispatch sırasında gönderdiğin id
            state.edus.items = state.edus.items.filter(
              (obj) => obj._id !== removedId // silinen objeyi filter ile kaldır
            );
          })
          // Silme işlemi pending durumu, frontend'de herhangi bir etki yaratmamalı
          .addCase(fetchRemoveEdu.pending, (state) => {
            state.edus.status = "loading"; // Silme işlemi yapılırken "loading" durumu
          })
          .addCase(fetchCreateEdu.pending, (state) => {
            state.edus.status = "loading"; // Yeni edu eklenirken "loading" durumu
          })
          // Edu eklerken state'i güncelle
          .addCase(fetchCreateEdu.fulfilled, (state, action) => {
            state.edus.items = [...state.edus.items, action.payload];
            state.edus.status = "loaded";
            state.edus.error = null; // Hata varsa temizle
          })
          .addCase(fetchCreateEdu.rejected, (state) => {
            state.edus.status = "error";
          })
          // Edu güncellerken state'i güncelle
          .addCase(fetchUpdateEdu.fulfilled, (state, action) => {
            const updatedEdu = action.payload; // Güncellenen Edu objesi
            state.edus.items = state.edus.items.map((item) =>
              item._id === updatedEdu._id ? updatedEdu : item
            );
            state.edus.status = "loaded";
          })
          .addCase(fetchUpdateEdu.rejected, (state) => {
            state.edus.status = "error";
          });
      },
})

export const eduReducer = edusSlice.reducer;

