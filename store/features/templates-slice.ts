import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type StateType = {
  selected: number | string | undefined
  current: number | string | undefined
}

const initialState: StateType = {
  selected: undefined,
  current: undefined,
}

export const templatesSlice = createSlice({
  name: 'templatesSlicer',
  initialState,
  reducers: {
    setSelectedTemplateSlice: (state: StateType, action: PayloadAction<number | string | undefined>): void => {
      state.selected = action.payload
    },
    setCurrentTemplateSlice: (state: StateType, action: PayloadAction<number | string | undefined>): void => {
      state.current = action.payload
    },
  },
})

export const { setSelectedTemplateSlice, setCurrentTemplateSlice } = templatesSlice.actions

export default templatesSlice.reducer
