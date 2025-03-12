import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import tasks from "../data/tasks";


export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tasks);
        }, 1500);
    });
});

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: { list: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = 'success';
                state.list = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default tasksSlice.reducer;