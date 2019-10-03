import counter, { CounterActions, CounterState } from "./counter/module";
import fileUpload, {
  FileUploadActions,
  FileUploadState
} from "./fileUpload/module";
import { createStore, combineReducers, Action } from "redux";

export default createStore(
  combineReducers({
    counter,
    fileUpload
  })
);

export type ReduxState = {
  counter: CounterState;
  fileUpload: FileUploadState;
};

export type ReduxAction = CounterActions | FileUploadActions | Action;
