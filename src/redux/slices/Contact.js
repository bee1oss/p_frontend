  import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
  import axios from "../../axios";

  // Tüm contact mesajlarını çek
  export const fetchContact = createAsyncThunk("contact/fetchContact", async () => {
    const { data } = await axios.get("/contacts/getAll");
    return data;
  });

  export const fetchContactById = createAsyncThunk(
    "contact/fetchContactById",
    async (id) => {
      const { data } = await axios.get(`/contacts/getOne/${id}`);
      return data;
    }
  );

  // Yeni contact mesajı oluştur
  export const fetchCreateContact = createAsyncThunk(
    "contact/fetchCreateContact",
    async (contactData) => {
      const { data } = await axios.post("/contacts/create", contactData);
      return data;
    }
  );

  // Mesajı okundu olarak işaretle
  export const fetchReadContact = createAsyncThunk(
    "contact/fetchReadContact",
    async (id) => {
      const { data } = await axios.patch(`/contacts/read/${id}`, {
        okundu: true,
      });
      return data; // güncellenen contact objesi
    }
  );

  // Mesajı sil
  export const fetchRemoveContact = createAsyncThunk(
    "contact/fetchRemoveContact",
    async (id) => { await axios.delete(`/contacts/del/${id}`);
      return id;
    }
  );

  const initialState = {
    contact: {
      items: [],
      status: "loading",
    },
  };

  const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        // fetchContactById
        .addCase(fetchContactById.pending, (state) => {
          state.contact.status = "loading";
        })
        .addCase(fetchContactById.fulfilled, (state, action) => {
          const updatedMessage = action.payload;
          const index = state.contact.items.findIndex(msg => msg._id === updatedMessage._id);
          if (index !== -1) {
            state.contact.items[index] = updatedMessage;
          }
          state.contact.status = "loaded";
        })
        .addCase(fetchContactById.rejected, (state) => {
          state.contact.items = [];
          state.contact.status = "error";
        })
        // fetchContact
        .addCase(fetchContact.pending, (state) => {
          state.contact.status = "loading";
        })
        .addCase(fetchContact.fulfilled, (state, action) => {
          state.contact.items = action.payload;
          state.contact.status = "loaded";
        })
        .addCase(fetchContact.rejected, (state) => {
          state.contact.items = [];
          state.contact.status = "error";
        })

        // fetchCreateContact
        .addCase(fetchCreateContact.pending, (state) => {
          state.contact.status = "loading";
        })
        .addCase(fetchCreateContact.fulfilled, (state, action) => {
          state.contact.items.push(action.payload);
          state.contact.status = "loaded";
        })
        .addCase(fetchCreateContact.rejected, (state) => {
          state.contact.status = "error";
        })

        // fetchReadContact
        .addCase(fetchReadContact.fulfilled, (state, action) => {
          const updatedMessage = action.payload;
          const index = state.contact.items.findIndex(msg => msg._id === updatedMessage._id);
          if (index !== -1) {
            state.contact.items[index] = updatedMessage;
          }
        })

        // fetchRemoveContact
        .addCase(fetchRemoveContact.pending, (state) => {
          state.contact.status = "loading";
        })
        .addCase(fetchRemoveContact.fulfilled, (state, action) => {
          state.contact.items = state.contact.items.filter(
            (obj) => obj._id !== action.payload._id
          );
          state.contact.status = "loaded";
        })
        .addCase(fetchRemoveContact.rejected, (state) => {
          state.contact.status = "error";
        });
    },
  });

  export const contactReducer = contactSlice.reducer;
