/* eslint-disable camelcase */
import { ISidebarState, ISidebarAction } from "./sidebar-interface";
import { TOGGLE_EDUCATION, TOGGLE_EXPERIENCE, TOGGLE_LANGUAGE, TOGGLE_REFERRENCES, TOGGLE_PERSONAL_DATA, TOGGLE_SKILL, TOGGLE_TEMPLATES } from "@store/redux-types/sidebar-types";

const initial_state: ISidebarState = {
  personal: false,
  education: false,
  experience: false,
  referrences: false,
  skills: false,
  languages: false,
  templates: false,
};

const SidebarReducer = (state = initial_state, action: ISidebarAction) => {
  switch (action.type) {
    case TOGGLE_PERSONAL_DATA:
      return {
        ...state,
        personal: action.payload,
      };
    case TOGGLE_EDUCATION:
      return {
        ...state,
        education: action.payload,
      };
    case TOGGLE_EXPERIENCE:
      return {
        ...state,
        experience: action.payload,
      };
    case TOGGLE_REFERRENCES:
      return {
        ...state,
        referrences: action.payload,
      };
    case TOGGLE_SKILL:
      return {
        ...state,
        skills: action.payload,
      };
    case TOGGLE_LANGUAGE:
      return {
        ...state,
        languages: action.payload,
      };
    case TOGGLE_TEMPLATES:
      return {
        ...state,
        templates: action.payload,
      };

    default:
      return { ...state };
  }
};
export default SidebarReducer;
