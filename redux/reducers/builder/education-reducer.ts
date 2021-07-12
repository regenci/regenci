import { ADD_EDUCATION, REMOVE_EDUCATION } from "@store/redux-types/education-types";
import { IEducationAction, IEducationState } from "./education-interface";

// const initial = {
//   institution_name: "",
//   institution_calification: "",
//   institution_start_date: "",
//   institution_end_date: "",
// };

const educationReducer = (state: IEducationState, action: IEducationAction) => {
  switch (action.type) {
    case ADD_EDUCATION:
      return {
        ...state,
        education_data: [...state.education_data, action.payload],
      };
    case REMOVE_EDUCATION:
      return {
        ...state,
        education_data: state.education_data.filter((i) => i.id === action.payload),
      };

    default:
      break;
  }
};

export default educationReducer;
