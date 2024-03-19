import axios from 'axios';

export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_ERROR = 'POST_DATA_ERROR';

const postDataSuccess = (data) => ({
  type: POST_DATA_SUCCESS,
  data,
});

const postDataError = (error) => ({
  type: POST_DATA_ERROR,
  error
});

export const postDataAsync = () => (dispatch) => {
  axios(`https://www.reddit.com/best/.json`)
    .then(({ data: { data } }) => {
      dispatch(postDataSuccess(data.children));
    })
    .catch((err) => {
      dispatch(postDataError(err.toString()));
    });
};
