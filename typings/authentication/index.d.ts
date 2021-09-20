export type SignIn = { email_address: string; password: string }
export type SignUp = { first_name: string; last_name: string } & SignIn
export type SignUpForm = { first_name: string; last_name: string; confirm_password } & SignIn
export type ForgotPassword = { email_address: string }
export type ResetPassword = { id: string; verification_code: number; main_verification_code: number; password: string }
export type ActivateAccount = { verification_code: number; decription_key: string }
