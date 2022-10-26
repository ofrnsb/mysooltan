import { appData } from '../modals/reducerModals';
import { createStore } from 'redux';

export const Reducer = (state = appData, action) => {
  switch (action.type) {
    case 'setUserName': {
      return { ...state, username: action.payload };
    }
    case 'setRepoList': {
      return { ...state, repoList: action.payload };
    }
    case 'setLoading': {
      return { ...state, loading: action.payload };
    }
    default:
      return state;
  }
};

export const store = createStore(Reducer);
