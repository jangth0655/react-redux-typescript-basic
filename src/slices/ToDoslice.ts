import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IToDos {
  text: string;
  id: number;
}

const todoSlice = createSlice({
  name: "toDos",
  initialState: [] as IToDos[],
  reducers: {
    addToDo: (state, action: PayloadAction<IToDos>) => {
      state.push({ text: action.payload.text, id: Date.now() });
    },
    deleteToDo: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export default todoSlice.reducer;
export const { addToDo, deleteToDo } = todoSlice.actions;
