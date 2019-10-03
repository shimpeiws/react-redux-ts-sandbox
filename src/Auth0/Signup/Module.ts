// ActionCreator
import { Action } from "redux";

export enum ActionNames {}

export type SignupActions = Action;

export interface SignupState {
  loading: boolean;
}

export const initialState: SignupState = { loading: false };

export default function reducer(
  state: SignupState = initialState,
  action: SignupActions
): SignupState {
  switch (action.type) {
    default:
      return state;
  }
}
