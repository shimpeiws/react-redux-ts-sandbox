import counter, { CounterActions, CounterState } from "./counter/module";
import fileUpload, {
  FileUploadActions,
  FileUploadState
} from "./fileUpload/module";
import signup, { SignupActions, SignupState } from "./Auth0/Signup/Module";
import { createStore, combineReducers, Action } from "redux";

export default createStore(
  combineReducers({
    counter,
    fileUpload,
    signup
  })
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
