import todoSlice from "./slices/ToDoslice";
import { combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
  todoSlice,
});

export default reducer;
