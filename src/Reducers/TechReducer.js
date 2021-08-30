import {
  ADD_TECH,
  DELETE_TECH,
  GET_TECHS,
  TECHS_ERROR,
} from "../actions/types";

const initialState = {
  techs: null,
  loading: false,
  error: null,
};
const TechReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: [...state.techs.filter((tech) => tech.id !== action.payload)],
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };
    case TECHS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default TechReducer;
