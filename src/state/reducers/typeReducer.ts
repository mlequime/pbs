import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Type } from "../../models/type";
import { TypeState } from "../type.state";

const typeSlice = createSlice({
  name: "pokemon",
  initialState: {
    items: [],
    dirty: false,
  } as TypeState,
  reducers: {
    addType(state, action: PayloadAction<Type>) {
      state.items.push(action.payload);
    },
    setTypes(state, action: PayloadAction<Type[]>) {
      state.items = action.payload;
    },
  },
});

export default typeSlice;
