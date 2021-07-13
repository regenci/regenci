/* eslint-disable camelcase */
export type sidebarActionType = "TOGGLE_TEMPLATES" | "TOGGLE_EDUCATION" | "TOGGLE_EXPERIENCE" | "TOGGLE_LANGUAGE" | "TOGGLE_REFERRENCES" | "TOGGLE_PERSONAL_DATA" | "TOGGLE_SKILL";

export interface ISidebarAction {
  type: sidebarActionType;
  payload: boolean;
}

export interface ISidebarState {
  personal: boolean;
  education: boolean;
  experience: boolean;
  referrences: boolean;
  skills: boolean;
  languages: boolean;
  templates: boolean;
}
