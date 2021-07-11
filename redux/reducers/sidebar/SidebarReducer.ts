/* eslint-disable camelcase */
import {
  TOGGLE_SIDEBAR_EDUCATION,
  TOGGLE_SIDEBAR_EXPERIENCE,
  TOGGLE_SIDEBAR_LANGUAGE,
  TOGGLE_SIDEBAR_LINKS,
  TOGGLE_SIDEBAR_PERSONAL_DATA,
  TOGGLE_SIDEBAR_SKILL,
  TOGGLE_SIDEBAR_TEMPLATES,
} from "@store/redux-types/sidebar-types";
import { ISidebarState, ISidebarAction } from "./sidebar-interface";

const initial_state: ISidebarState = {
  toggle_personal: false,
  toggle_education: false,
  toggle_experience: false,
  toggle_links: false,
  toggle_skills: false,
  toggle_languages: false,
  toggle_templates: false,
};

const SidebarReducer = (state = initial_state, action: ISidebarAction) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR_PERSONAL_DATA:
      return {
        ...state,
        toggle_personal: action.payload,
      };
    case TOGGLE_SIDEBAR_EDUCATION:
      return {
        ...state,
        toggle_education: action.payload,
      };
    case TOGGLE_SIDEBAR_EXPERIENCE:
      return {
        ...state,
        toggle_experience: action.payload,
      };
    case TOGGLE_SIDEBAR_LINKS:
      return {
        ...state,
        toggle_links: action.payload,
      };
    case TOGGLE_SIDEBAR_SKILL:
      return {
        ...state,
        toggle_skills: action.payload,
      };
    case TOGGLE_SIDEBAR_LANGUAGE:
      return {
        ...state,
        toggle_languages: action.payload,
      };
    case TOGGLE_SIDEBAR_TEMPLATES:
      return {
        ...state,
        toggle_templates: action.payload,
      };

    default:
      return { ...state };
  }
};
export default SidebarReducer;
