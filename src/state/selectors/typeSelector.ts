import { createSelector } from "reselect";
import { Pokemon } from "../../models/pokemon";
import { AppState } from "../app.state";
import { Type } from "../../models/type";

export const selectTypeList = createSelector(
  (state: AppState) => state.types?.items,
  (typeList: Type[]) => typeList
);
