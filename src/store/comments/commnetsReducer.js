import {
  COMMENTS_DATA,
  COMMENTS_ERROR,
  COMMENTS_CLEAR
} from './action';

const initianalState = {
  status: '',
  data: [],
  error: '',
};

export const commentsReducer = (state = initianalState, action) => {
  switch (action.type) {
    case COMMENTS_DATA:
      return {
        ...state,
        data: action.data,
        status: 'loaded'
      };
    case COMMENTS_ERROR:
      return {
        ...state,
        error: action.error,
        status: 'error'
      };
    case COMMENTS_CLEAR:
      return {
        ...state,
        data: action.data,
        status: 'loading'
      };

    default:
      return state;
  }
};
