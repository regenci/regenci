import { User } from '@app/typings/user'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  current_user: User | null
  logged_in: boolean | null
  reset_token: string | null
  register_decription_key: string | null
}

const initialState: InitialState = {
  logged_in: null,
  reset_token: null,
  current_user: null,
  register_decription_key: null,
}

export const authSlice = createSlice({
  name: 'authSlicer',
  initialState,
  reducers: {
    setLoggedInSlice: (state, action: PayloadAction<boolean | null>) => {
      state.logged_in = action.payload
    },
    setCurrentUserSlice: (state, action: PayloadAction<User | null>) => {
      state.current_user = action.payload
    },
    setRegisterSlice: (state, action: PayloadAction<string | null>) => {
      state.register_decription_key = action.payload as string
    },
    setResetTokenSlice: (state, action: PayloadAction<string | null>) => {
      state.reset_token = action.payload
    },
    setLogoutSlice: (state, action: PayloadAction<null>) => {
      state.logged_in = action.payload
      state.reset_token = action.payload
      state.current_user = action.payload
      state.register_decription_key = action.payload
    },
  },
})

export const { setLoggedInSlice, setCurrentUserSlice, setRegisterSlice, setResetTokenSlice, setLogoutSlice } =
  authSlice.actions

export default authSlice.reducer
