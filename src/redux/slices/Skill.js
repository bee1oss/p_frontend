import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";



export const fetchSkills = createAsyncThunk("skills/fetchSkills", async () => {
    const { data } = await axios.get("/skills/getAll");
    return data;
});

export const fetchCreateSkill = createAsyncThunk(
    "skills/fetchCreateSkill",
    async (skillData) => {
        const { data } = await axios.post("/skills/create", skillData);
        return data; // yeni oluşturulan skill objesi
    }
);

export const fetchUpdateSkill = createAsyncThunk(
    "skills/fetchUpdateSkill",
    async (updatedSkillData) => {
        const { data } = await axios.patch(`/skills/update/${updatedSkillData.id}`, updatedSkillData);
        return data; // güncellenen skill objesi
    }
);

export const fetchRemoveSkill = createAsyncThunk(
    "skills/fetchRemoveSkill",
    async (id) => { await axios.delete(`/skills/del/${id}`);
        return id; // sadece temiz veri döner
    }
);


const initialState = {
    skills: {
        items: [],
        status: "loading",
    },
};

const skillsSlice = createSlice({
    name: "skills",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
          // Skilleri alırken
          .addCase(fetchSkills.pending, (state) => {
            state.skills.status = "loading";
          })
          .addCase(fetchSkills.fulfilled, (state, action) => {
            state.skills.items = action.payload;
            state.skills.status = "loaded";
          })
          .addCase(fetchSkills.rejected, (state) => {
            state.skills.items = [];
            state.skills.status = "error";
          })
          // Silme işleminde: veriyi güncelledikten sonra state'i düzenle
          .addCase(fetchRemoveSkill.fulfilled, (state, action) => {
            state.skills.items = state.skills.items.filter(
              (obj) => obj._id !== action.payload
            );
          })
          // Silme işlemi pending durumu, frontend'de herhangi bir etki yaratmamalı
          .addCase(fetchRemoveSkill.pending, (state) => {
            state.skills.status = "loading"; // Silme işlemi yapılırken "loading" durumu
          })
          .addCase(fetchCreateSkill.pending, (state) => {
            state.skills.status = "loading"; // Yeni skill eklenirken "loading" durumu
          })
          // Skill eklerken state'i güncelle
          .addCase(fetchCreateSkill.fulfilled, (state, action) => {
            state.skills.items = [...state.skills.items, action.payload];
            state.skills.status = "loaded";
            state.skills.error = null; // Hata varsa temizle
          })
          .addCase(fetchCreateSkill.rejected, (state) => {
            state.skills.status = "error";
          })
          // Skill güncellerken state'i güncelle
          .addCase(fetchUpdateSkill.fulfilled, (state, action) => {
            const updatedSkill = action.payload; // Güncellenen skill objesi
            state.skills.items = state.skills.items.map((item) =>
              item._id === updatedSkill._id ? updatedSkill : item
            );
            state.skills.status = "loaded";
          })
          .addCase(fetchUpdateSkill.rejected, (state) => {
            state.skills.status = "error";
          });
      },
})

export const skillsReducer = skillsSlice.reducer;

