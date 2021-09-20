import { API } from './base'
import { SignUp, SignIn, ResetPassword, ForgotPassword, ActivateAccount } from '@app/typings/authentication'

export const logoutReq = () => API.get('/authentication/logout')
export const signUpReq = (data: SignUp) => API.post('/authentication/sign-up', { ...data })
export const signInReq = (data: SignIn) => API.post('/authentication/sign-in', { ...data })
export const resetPasswordReq = (data: ResetPassword) => API.post('/authentication/reset-password', { ...data })
export const forgotPasswordReq = (data: ForgotPassword) => API.post('/authentication/forgot-password', { ...data })
export const activateAccountReq = (data: ActivateAccount) => API.post('/authentication/activate-account', { ...data })
