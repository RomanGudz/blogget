import axios from 'axios';

export const COMMENTS_DATA = 'COMMENTS_DATA';
export const COMMENTS_ERROR = 'COMMENTS_ERROR';
export const COMMENTS_CLEAR = 'COMMENTS_CLEAR';

const commentsDataSuccess = (data) => ({
  type: COMMENTS_DATA,
  data
});

const commentsError = (error) => ({
  type: COMMENTS_ERROR,
  error,
});

const commentsDataClear = () => ({
  type: COMMENTS_CLEAR,
  data: []
});

export const commentsDataAsync = (id) => (dispatch) => {
  dispatch(commentsDataClear());
  axios(`https://oauth.reddit.com/comments/${id}.json`)
    .then((response) => {
      const postData = response.data[0].data.children[0].data;
      const commentData = response.data[1].data.children.map(item => item.data);
      dispatch(commentsDataSuccess([postData, commentData]));
    })
    .catch((err) => {
      dispatch(commentsError(err));
      console.error(err);
    });
};
