import {
  POST_DATA_SUCCESS,
  POST_DATA_ERROR,
} from './action';

const initianalState = {
  loading: false,
  data: [],
  error: '',
};

export const postDataReducer = (state = initianalState, action) => {
  switch (action.type) {
    case POST_DATA_SUCCESS:
      return {
        ...state,
        data: action.data
      };
    case POST_DATA_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
