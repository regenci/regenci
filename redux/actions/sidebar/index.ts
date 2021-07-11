import {
  TOGGLE_SIDEBAR_EDUCATION,
  TOGGLE_SIDEBAR_EXPERIENCE,
  TOGGLE_SIDEBAR_LANGUAGE,
  TOGGLE_SIDEBAR_LINKS,
  TOGGLE_SIDEBAR_PERSONAL_DATA,
  TOGGLE_SIDEBAR_SKILL,
  TOGGLE_SIDEBAR_TEMPLATES,
} from "@store/redux-types/sidebar-types";

export const toggleEducationAction = (state: boolean, dispatch: any) => {
  return dispatch({
    type: TOGGLE_SIDEBAR_EDUCATION,
    payload: state,
  });
};
export const toggleExperienceAction = (state: boolean, dispatch: any) => {
  return dispatch({
    type: TOGGLE_SIDEBAR_EXPERIENCE,
    payload: state,
  });
};
export const toggleLanguagesAction = (state: boolean, dispatch: any) => {
  return dispatch({
    type: TOGGLE_SIDEBAR_LANGUAGE,
    payload: state,
  });
};
export const toggleLinksAction = (state: boolean, dispatch: any) => {
  return dispatch({
    type: TOGGLE_SIDEBAR_LINKS,
    payload: state,
  });
};
export const togglePersonalAction = (state: boolean, dispatch: any) => {
  return dispatch({
    type: TOGGLE_SIDEBAR_PERSONAL_DATA,
    payload: state,
  });
};
export const toggleSkillAction = (state: boolean, dispatch: any) => {
  return dispatch({
    type: TOGGLE_SIDEBAR_SKILL,
    payload: state,
  });
};
export const toggleTemplatesAction = (state: boolean, dispatch: any) => {
  return dispatch({
    type: TOGGLE_SIDEBAR_TEMPLATES,
    payload: state,
  });
};
