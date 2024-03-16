import { createStore } from 'redux';
import { getToken, setToken } from '../hooks/token';

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const UPDATE_TOKEN = 'UPDATE_TOKEN';
const DELETE_TOKEN = 'DELETE_TOKEN';

const initianalState = {
  commnet: 'kk',
  token: getToken(),
};

export const upDateComment = comment => ({
  type: UPDATE_COMMENT,
  comment,
});

export const updateToken = tokenNew => ({
  type: UPDATE_TOKEN,
  token: tokenNew,
});

export const deleteToken = () => ({
  type: DELETE_TOKEN,
  token: '',
});

const rootReducer = (state = initianalState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commnet: action.commnet,
      };
    case UPDATE_TOKEN:
      setToken(action.token);
      return {
        ...state,
        token: action.token,
      };

    case DELETE_TOKEN:
      setToken(action.token);
      return {
        ...state,
        token: '',
      };
    default: return state;
  }
};

export const store = createStore(rootReducer);
