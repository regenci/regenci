import { TOGGLE_EDUCATION, TOGGLE_EXPERIENCE, TOGGLE_LANGUAGE, TOGGLE_REFERRENCES, TOGGLE_PERSONAL_DATA, TOGGLE_SKILL, TOGGLE_TEMPLATES } from "@store/redux-types/sidebar-types";

export const togglePersonalAction = (state: boolean, dispatch: any) => {
  return dispatch({
    type: TOGGLE_PERSONAL_DATA,
    payload: state,
  });
};
export const toggleEducationAction = (state: boolean, dispatch: any) => {
  return dispatch({
    type: TOGGLE_EDUCATION,
    payload: state,
  });
};
export const toggleExperienceAction = (state: boolean, dispatch: any) => {
  return dispatch({
    type: TOGGLE_EXPERIENCE,
    payload: state,
  });
};
export const toggleReferrencesAction = (state: boolean, dispatch: any) => {
  return dispatch({
    type: TOGGLE_REFERRENCES,
    payload: state,
  });
};
export const toggleLanguagesAction = (state: boolean, dispatch: any) => {
  return dispatch({
    type: TOGGLE_LANGUAGE,
    payload: state,
  });
};
export const toggleSkillAction = (state: boolean, dispatch: any) => {
  return dispatch({
    type: TOGGLE_SKILL,
    payload: state,
  });
};
export const toggleTemplatesAction = (state: boolean, dispatch: any) => {
  return dispatch({
    type: TOGGLE_TEMPLATES,
    payload: state,
  });
};
