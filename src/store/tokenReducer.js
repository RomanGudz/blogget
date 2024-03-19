import { setToken } from '../hooks/token';

const UPDATE_TOKEN = 'UPDATE_TOKEN';
const DELETE_TOKEN = 'DELETE_TOKEN';

const initianalState = {
  token: '',
};

export const updateToken = tokenNew => ({
  type: UPDATE_TOKEN,
  token: tokenNew,
});

export const deleteToken = () => ({
  type: DELETE_TOKEN,
  token: '',
});

export const tokenmidleware = (store) => (next) => (action) => {
  if (action.type === UPDATE_TOKEN) {
    setToken(action.token);
  }
  if (action.type === DELETE_TOKEN) {
    setToken('');
  }
  next(action);
};

export const tokenReducer = (state = initianalState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case DELETE_TOKEN:
      return {
        ...state,
        token: '',
      };
    default: return state;
  }
};
