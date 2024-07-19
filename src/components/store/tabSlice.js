import { createSlice } from '@reduxjs/toolkit';

const tabSlice = createSlice({
  name: 'tabs',
  initialState: {
    activeTab: null,
  },
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    initializeActiveTab: (state, action) => {
      if (state.activeTab === null) {
        state.activeTab = action.payload;
      }
    },
  },
});

export const { setActiveTab, initializeActiveTab } = tabSlice.actions;
export default tabSlice.reducer;