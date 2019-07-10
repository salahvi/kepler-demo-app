import keplerGlReducer from "kepler.gl/reducers";
import { combineReducers } from "redux";
import AppReducer from "./ReducerApp";

const reducer = combineReducers({
  // <-- mount kepler.gl reducer in your app
  keplerGl: keplerGlReducer,

  // Your other reducers here
  app: AppReducer
});

export default reducer;
