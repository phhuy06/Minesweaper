import { createSlice } from '@reduxjs/toolkit'

export const controlSlice = createSlice({
  name: 'control',
  initialState: {
    value: false
  },
  reducers: {
    handleReset: (state) => {
        state.value = !state.value;
    },
  }
})

// Action creators are generated for each case reducer function
export const { handleReset } = controlSlice.actions

export default controlSlice.reducer