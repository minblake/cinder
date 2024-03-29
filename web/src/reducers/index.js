import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { match } from './matches';
import { recommendations } from './recommendations';
import { profileDisplay } from './profileDisplay';
import { userInfo } from './userInfo';
import { auth } from './auth';

export default combineReducers({
  routing: routerReducer,
  match,
  rec: recommendations,
  profileDisplay,
  userInfo,
  auth
});
