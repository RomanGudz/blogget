import {
  SEARCH_REQUEST,
  SEARCH_REQUEST_ERROR,
  SEARCH_REQUEST_SUCCESS,
  SEARCH_REQUEST_SUCCESS_AFTER
} from './searchAction';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: '',
  search: '',
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.children,
        after: action.after,
        search: action.search
      };
    case SEARCH_REQUEST_SUCCESS_AFTER:
      console.log(action);
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.children],
        after: action.after,
        search: action.search
      };
    case SEARCH_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
