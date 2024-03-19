import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenReducer, tokenmidleware } from './tokenReducer';
import { commentReducer } from './commentReducer';
import { thunk } from 'redux-thunk';
import { authReducer } from './Auth/authReducer';
import { postDataReducer } from './postData/postDataReducer';
import { commentsReducer } from './comments/commnetsReducer';

const rootReducer = combineReducers({
  tokenReducer,
  commentReducer,
  auth: authReducer,
  postData: postDataReducer,
  comments: commentsReducer,
});


export const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(tokenmidleware, thunk)));
