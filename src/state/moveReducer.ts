import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Move } from "../models/move";

const moveSlice = createSlice(
    {
        name: 'move',
        initialState:  [] as Move[],
        reducers: {
            addMove: {
                reducer(state, action: PayloadAction<Move>) {
                    state.push(action.payload)
                },
                prepare: (move: Move) => {
                    return {
                        payload: move,
                    }
                }
            }
        }
    }
)

export default moveSlice.reducer;