import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputs: {},
  selects: {},
  loading: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      const { name, value } = action.payload;
      state.inputs[name] = value;
    },
    setSelectValue: (state, action) => {
      const { name, value } = action.payload;
      state.selects[name] = value;
    },
    resetForm: (state) => {
      state.inputs = {};
      state.selects = {};
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  }
});

export const { setInputValue, setSelectValue, resetForm, setLoading } = formSlice.actions;

export default formSlice.reducer;