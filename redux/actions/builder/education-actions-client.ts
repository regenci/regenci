import { IEducation } from "@store/reducers/builder/education-interface";
import { ADD_EDUCATION, REMOVE_EDUCATION } from "@store/redux-types/education-types";

export const addEducationAction = (data: IEducation, dispatch: any) => {
  return dispatch({
    type: ADD_EDUCATION,
    payload: data,
  });
};
export const removeEducationAction = (data: string, dispatch: any) => {
  return dispatch({
    type: REMOVE_EDUCATION,
    payload: data,
  });
};
