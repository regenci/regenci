import { ITogglers } from '@app/typings/other'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ITogglers = {
  togglers: {
    personal: false,
    education: false,
    experience: false,
    links: false,
    languages: false,
    skills: false,
    templates: false,
  },
  menu: {
    toggled: false,
  },
}

export type TogglerType = 'personal' | 'education' | 'experience' | 'links' | 'languages' | 'skills' | 'templates'

export const componentsSlice = createSlice({
  name: 'componentsSlicer',
  initialState,
  reducers: {
    toggler: (
      state: { togglers: { [x: string]: boolean } },
      action: { payload: { payload: boolean; toggler: TogglerType } }
    ) => {
      state.togglers[action.payload.toggler] = action.payload.payload
    },
    menuToggler: (state: { menu: { toggled: boolean } }, action: PayloadAction<boolean>) => {
      state.menu.toggled = action.payload
    },
  },
})

export const { toggler, menuToggler } = componentsSlice.actions

export default componentsSlice.reducer
