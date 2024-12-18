import { createSlice } from "@reduxjs/toolkit";

interface DashboardItem {
  // Define the shape of a single dashboard item
  id: number;
  name: string;
}

interface DashboardState {
  total: number;
  dashboardItems: DashboardItem[];
}


const initialState: DashboardState = {
  total: 0,
  dashboardItems: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addItems(state, action) {
      const newItem = action.payload;
      state.dashboardItems.push(newItem);
    },
  },
});

const { actions, reducer } = dashboardSlice;
export const { addItems } = actions;
export default reducer;
