import axios from 'axios';

export const POST_DATA_REQUEST = 'POST_DATA_REQUEST';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_ERROR = 'POST_DATA_ERROR';
export const POST_DATA_SUCCESS_AFTER = 'POST_DATA_SUCCESS_AFTER';
export const CHANGE_PAGE = 'CHANGE_PAGE';

const postDataRequest = () => ({
  type: POST_DATA_REQUEST,
});

const postDataSuccess = (data) => ({
  type: POST_DATA_SUCCESS,
  data: data.children,
  after: data.after
});

const postDataSuccessAfter = (data) => ({
  type: POST_DATA_SUCCESS_AFTER,
  data: data.children,
  after: data.after
});

const postDataError = (error) => ({
  type: POST_DATA_ERROR,
  error
});

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page
});

export const postDataAsync = (newPage) => (dispatch, getState) => {
  let page = getState().postData.page;
  if (newPage) {
    page = newPage;
    dispatch(changePage(page));
  }
  const token = getState().tokenReducer.token;
  const after = getState().postData.after;
  const loading = getState().postData.loading;
  const isLast = getState().postData.isLast;

  if (!token || loading || isLast) return;
  dispatch(postDataRequest());
  axios(`https://oauth.reddit.com/${page}?limit=10&${after ? `after=${after}` : ''}.json`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({ data: { data } }) => {
      if (after) {
        dispatch(postDataSuccessAfter(data));
      } else {
        dispatch(postDataSuccess(data));
      }
    })
    .catch((err) => {
      dispatch(postDataError(err.toString()));
    });
};
