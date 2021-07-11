/* eslint-disable camelcase */
export type actionType =
  | "TOGGLE_SIDEBAR_TEMPLATES"
  | "TOGGLE_SIDEBAR_EDUCATION"
  | "TOGGLE_SIDEBAR_EXPERIENCE"
  | "TOGGLE_SIDEBAR_LANGUAGE"
  | "TOGGLE_SIDEBAR_LINKS"
  | "TOGGLE_SIDEBAR_PERSONAL_DATA"
  | "TOGGLE_SIDEBAR_SKILL";

export interface ISidebarAction {
  type: actionType;
  payload: boolean;
}

export interface ISidebarState {
  toggle_personal: boolean;
  toggle_education: boolean;
  toggle_experience: boolean;
  toggle_links: boolean;
  toggle_skills: boolean;
  toggle_languages: boolean;
  toggle_templates: boolean;
}
