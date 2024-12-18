import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./slices/dashboard-slice.ts";
import sidebarSlice from "./slices/sidebar-slice.ts";

const reducers = combineReducers({
  dashboardSlice: dashboardSlice,
  sidebarSlice: sidebarSlice,
});

const store = configureStore({
  reducer: reducers,
});

export { store };

