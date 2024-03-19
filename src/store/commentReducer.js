const UPDATE_COMMENT = 'UPDATE_COMMENT';

const initianalState = {
  commnet: 'kk',
};

export const upDateComment = comment => ({
  type: UPDATE_COMMENT,
  comment,
});

export const commentReducer = (state = initianalState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commnet: action.commnet,
      };
    default:
      return state;
  }
};
