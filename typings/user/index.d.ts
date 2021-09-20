export type User = {
  id: string
  account_id: string
  resume_id: string
  created_at: Date
  updated_at: Date
}
export type Account = {
  id: string
  first_name: string
  last_name: string
  email_address: string
  password: string
  profile_picture?: string
  current_template?: string
  used_templates: string[]
}
export type Resume = {
  id: string
  email_address?: string
  first_name?: string
  last_name?: string
  profile_picture?: string
  date_of_birth?: Date
  job_title?: string
  phone_number?: string
  full_address?: string
  professional_summary?: string
  education?: Education[]
  experience?: Experience[]
  languages?: Language[]
  skills?: Skill[]
  links?: Link[]
  hobbies?: Hobby[]
  references?: Reference[]
}
export type Education = {
  id: string
  institution_name: string
  institution_degree: string
  institution_start_date: Date
  institution_end_date: Date
  resume_id: string
}
export type Experience = {
  id: string
  experience_company: string
  experience_job_title: string
  experience_start_date: Date
  experience_end_date: Date
  experience_description?: string
  resume_id: string
}
export type Skill = {
  id: string
  skill_title: string
  skill_level?: number
  resume_id: string
}
export type Link = {
  id: string
  link_title: string
  link_url: string
  resume_id: string
}
export type Hobby = {
  id: string
  hobby_title: string
  resume_id: string
}
export type Reference = {
  id: string
  referent_full_name: string
  referent_company_name: string
  referent_phone_number: string
  referent_email_address: string
  resume_id: string
}
