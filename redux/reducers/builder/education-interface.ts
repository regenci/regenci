/* eslint-disable camelcase */
export type educationActionType = "ADD_EDUCATION" | "REMOVE_EDUCATION";

export interface IEducationAction {
  type: educationActionType;
  payload: IEducation | string;
}
export interface IEducation {
  id?: string;
  institution_name: string;
  institution_calification: string;
  institution_start_date: string;
  institution_end_date: string;
}
export interface IEducationState {
  education_data: IEducation[];
}
