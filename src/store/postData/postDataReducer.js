import {
  POST_DATA_SUCCESS,
  POST_DATA_ERROR,
  POST_DATA_SUCCESS_AFTER,
  POST_DATA_REQUEST,
  CHANGE_PAGE,
} from './action';

const initianalState = {
  loading: false,
  data: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postDataReducer = (state = initianalState, action) => {
  switch (action.type) {
    case POST_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        after: action.after,
        isLast: !action.after,
      };
    case POST_DATA_SUCCESS_AFTER:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.data],
        after: action.after,
        isLast: !action.after,
      };
    case POST_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
        after: '',
        isLast: false,
      };

    default:
      return state;
  }
};
