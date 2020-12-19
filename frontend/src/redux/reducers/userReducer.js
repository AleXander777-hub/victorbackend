import { types } from "../actions/types";

export const DefaultState = {
  id: null,
  success_login: false,
  posts: null,
  created_post: null,
  success_delete: false,
  post: null,
};

export const userReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return {
        ...state,
        id: action.payload,
        success_login: true,
      };
    case types.GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case types.CREATE_POST:
      return {
        ...state,
        created_post: action.payload,
      };
    case types.DELETE_POST:
      return {
        ...state,
        success_delete: true,
      };
    case types.GET_ONE_POST:
      return {
        ...state,
        post: action.payload,
      };
    case types.UPDATE_POST:
      return {
        ...state,
        post: action.payload,
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
