// ActionCreator
import { Action } from "redux";

export enum ActionNames {
  INC = "counter/increment",
  DEC = "counter/decrement",
  FETCH_REQUEST_START = "counter/fetch_request_start",
  FETCH_REQUEST_FINISH = "counter/fetch_request_finish"
}

interface IncrementAction extends Action {
  type: ActionNames.INC;
  plusAmount: number;
}
export const incrementAmount = (amount: number): IncrementAction => ({
  type: ActionNames.INC,
  plusAmount: amount
});

interface DecrementAction extends Action {
  type: ActionNames.DEC;
  minusAmount: number;
}

export const decrementAmount = (amount: number): DecrementAction => ({
  type: ActionNames.DEC,
  minusAmount: amount
});

interface FetchRequestStartAction extends Action {
  type: ActionNames.FETCH_REQUEST_START;
}

export const fetchRequestStart = (): FetchRequestStartAction => ({
  type: ActionNames.FETCH_REQUEST_START
});

interface FetchRequestFinishAction extends Action {
  type: ActionNames.FETCH_REQUEST_FINISH;
}

export const fetchRequestFinish = (): FetchRequestFinishAction => ({
  type: ActionNames.FETCH_REQUEST_FINISH
});

export interface CounterState {
  num: number;
}

export type CounterActions = IncrementAction | DecrementAction;

export const initialState: CounterState = { num: 0 };

export default function reducer(
  state: CounterState = initialState,
  action: CounterActions
): CounterState {
  switch (action.type) {
    case ActionNames.INC:
      return { num: state.num + action.plusAmount };
    case ActionNames.DEC:
      return { num: state.num - action.minusAmount };
    default:
      return state;
  }
}
