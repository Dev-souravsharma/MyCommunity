import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducer';

export default () => {
  let store = createStore(rootReducer, compose(applyMiddleware(thunk)));
  return {store};
};
