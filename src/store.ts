import counter, { CounterActions, CounterState } from "./counter/module";
import fileUpload, {
  FileUploadActions,
  FileUploadState
} from "./fileUpload/module";
import signup, { SignupActions, SignupState } from "./Auth0/Signup/Module";
import { createStore, combineReducers, Action, applyMiddleware } from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createHashHistory } from "history";

export const history = createHashHistory();

export default createStore(
  combineReducers({
    router: connectRouter(history),
    counter,
    fileUpload,
    signup
  }),
  applyMiddleware(routerMiddleware(history))
);

export type ReduxState = {
  counter: CounterState;
  fileUpload: FileUploadState;
  signup: SignupState;
};

export type ReduxAction =
  | CounterActions
  | FileUploadActions
  | SignupActions
  | Action;
