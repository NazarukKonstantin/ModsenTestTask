import { combineReducers, legacy_createStore as createStore } from 'redux';
import { bookReducer } from './bookReducer';

const rootReducer = combineReducers({
  // user: userReducer,
  book: bookReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
