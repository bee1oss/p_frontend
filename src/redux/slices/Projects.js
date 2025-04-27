import axios from "../../axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk("projects/fetchProjects", async () => {
    const { data } = await axios.get("/projects/getAll");
    return data;
});

export const fetchCreateProject = createAsyncThunk(
    "projects/fetchCreateProject",
    async (projectData) => {
        const { data } = await axios.post("/projects/create", projectData);
        return data; // yeni oluşturulan edu objesi
    }
);

export const fetchUpdateProject = createAsyncThunk(
    "projects/fetchUpdateProject",
    async (updatedProjectData) => {
        const { data } = await axios.patch(`/projects/update/${updatedProjectData.id}`, updatedProjectData);
        return data; // güncellenen proje objesi
    }
);

export const fetchRemoveProject = createAsyncThunk(
    "projects/fetchRemoveProject",
    async (id) => { await axios.delete(`/projects/del/${id}`);
        return id; // sadece temiz veri döner
    }
);

const initialState = {
    projects: {
        items: [],
        status: "loading",
    },
};

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Projeleri alırken
            .addCase(fetchProjects.pending, (state) => {
                state.projects.status = "loading";
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.projects.items = action.payload;
                state.projects.status = "loaded";
            })
            .addCase(fetchProjects.rejected, (state) => {
                state.projects.items = [];
                state.projects.status = "error";
            })
            // Proje oluştururken
            .addCase(fetchCreateProject.pending, (state) => {
                state.projects.status = "loading";
            })
            .addCase(fetchCreateProject.fulfilled, (state, action) => {
                state.projects.items.push(action.payload);
                state.projects.status = "loaded";
            })
            .addCase(fetchCreateProject.rejected, (state) => {
                state.projects.status = "error";
            })
            // Proje güncellerken
            .addCase(fetchUpdateProject.pending, (state) => {
                state.projects.status = "loading";
            })
            .addCase(fetchUpdateProject.fulfilled, (state, action) => {
                const index = state.projects.items.findIndex((obj) => obj._id === action.payload._id);
                if (index !== -1) {
                    state.projects.items[index] = action.payload;
                }
                state.projects.status = "loaded";
            })
            .addCase(fetchUpdateProject.rejected, (state) => {
                state.projects.status = "error";
            })
            // Proje silerken
            .addCase(fetchRemoveProject.pending, (state) => {
                state.projects.status = "loading";
            })
            .addCase(fetchRemoveProject.fulfilled, (state, action) => {
                const index = state.projects.items.findIndex((obj) => obj._id === action.payload._id);
                if (index !== -1) {
                    state.projects.items.splice(index, 1);
                }
                state.projects.status = "loaded";
            })
            .addCase(fetchRemoveProject.rejected, (state) => {
                state.projects.status = "error";
            });
    },
});

export const projectsReducer = projectsSlice.reducer;