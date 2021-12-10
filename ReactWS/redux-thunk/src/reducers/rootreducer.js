import counterReducer from "./counterreducer";
import productReducer from "./productreducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  count: counterReducer,
  fakeStore: productReducer,
});

export default rootReducer;
