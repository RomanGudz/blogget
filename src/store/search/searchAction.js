export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_REQUEST_SUCCESS = 'SEARCH_REQUEST_SUCCESS';
export const SEARCH_REQUEST_ERROR = 'SEARCH_REQUEST_ERROR';

export const searhRequest = ({ token, search }) => ({
  type: SEARCH_REQUEST,
  token,
  search,
});

export const searhRequestSuccess = ({ children, after }) => ({
  type: SEARCH_REQUEST_SUCCESS,
  children,
  after,
});

export const searhRequestError = (error) => ({
  type: SEARCH_REQUEST_ERROR,
  error,
});
