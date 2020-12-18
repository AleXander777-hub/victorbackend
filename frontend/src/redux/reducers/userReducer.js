import { types } from "../actions/types";

export const DefaultState = {
  username: null,
};

export const userReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return {
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
  {
    /*
      case "БЕРЕТ ВАКАНСИИ"
        vacancies: action.payload,
      case "БЕРЕТ ВАКАНСИЮ"
        vacancy: action.payload,
      case "БЕРЕТ ВАКАНСИЮ"
        current_vacancy: action.payload,
    
    
    
    */
  }
};
