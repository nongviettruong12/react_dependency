// import { SIDEBAR_SHOW_STATUS } from "@constants/constants";
import { createSlice } from "@reduxjs/toolkit";
import { SIDEBAR_SHOW_STATUS } from "../../constants/constants.ts";

const initialState = {
  sidebarShow: SIDEBAR_SHOW_STATUS.EXPAND,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSiderBarShow(state, action) {
      return { ...state, sidebarShow: action?.payload };
    },
  },
});

const { actions, reducer } = sidebarSlice;
export const { setSiderBarShow } = actions;
export default reducer;
