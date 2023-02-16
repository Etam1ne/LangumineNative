import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface tableState {
    value: string[][]
}

const initialState: tableState = {
    value: [["Word", "Translation"]]
}
const tableSlice = createSlice({
    name: "table",
    initialState: initialState,
    reducers: {
        loadTable: (state, action: PayloadAction<string[][]>) => {
            state.value = action.payload;
        }
    }
})

export const { loadTable } = tableSlice.actions;

export const selectTable =  (state: RootState) => state.table.value;

export const store = configureStore({
    reducer: {
        table: tableSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;