import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import filterReducer from "./reducers/filterReducer";
import displayReducer from "./reducers/displayReducer";
import searchReducer from "./reducers/searchReducer";

const reducer = combineReducers({
  filter: filterReducer,
  display: displayReducer,
  search: searchReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
