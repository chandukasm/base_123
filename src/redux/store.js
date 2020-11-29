import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import patientReducer from "./patientReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  patientReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
