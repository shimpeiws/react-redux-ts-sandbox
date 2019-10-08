// ActionCreator
import { Action } from "redux";

export enum ActionNames {
  REQUEST_START = "auth0/signup/request_start",
  REQUEST_FINISH = "auth0/signup/request_finish",
  SET_SIGNIN = "auth0/signup/signin"
}

interface RequestStartAction extends Action {
  type: ActionNames.REQUEST_START;
}

export const requestStart = (): RequestStartAction => ({
  type: ActionNames.REQUEST_START
});

interface RequestFinishAction extends Action {
  type: ActionNames.REQUEST_FINISH;
}

export const requestFinish = (): RequestFinishAction => ({
  type: ActionNames.REQUEST_FINISH
});

interface SetSigninAction extends Action {
  type: ActionNames.SET_SIGNIN;
  signin: boolean;
}

export const setSignin = (signin: boolean): SetSigninAction => ({
  type: ActionNames.SET_SIGNIN,
  signin
});

export type SignupActions =
  | RequestStartAction
  | RequestFinishAction
  | SetSigninAction;

export interface SignupState {
  loading: boolean;
  signin: boolean;
}

export const initialState: SignupState = { loading: false, signin: false };

export default function reducer(
  state: SignupState = initialState,
  action: SignupActions
): SignupState {
  switch (action.type) {
    case ActionNames.REQUEST_START:
      return { ...state, loading: true };
    case ActionNames.REQUEST_FINISH:
      return { ...state, loading: false };
    case ActionNames.SET_SIGNIN:
      return { ...state, signin: action.signin };
    default:
      return state;
  }
}
