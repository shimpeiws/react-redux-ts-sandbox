import { Counter } from "./Counter";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  decrementAmount,
  incrementAmount,
  fetchRequestStart,
  fetchRequestFinish
} from "./module";
import { ReduxAction, ReduxState } from "../store";
import axios from "axios";
import { push } from "connected-react-router";

export class ActionDispatcher {
  dispatch: (action: any) => any;

  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch;
  }

  public increment(amount: number) {
    this.dispatch(incrementAmount(amount));
  }

  public decrement(amount: number) {
    this.dispatch(decrementAmount(amount));
  }

  async asyncIncrement(): Promise<void> {
    this.dispatch(fetchRequestStart());

    try {
      const response = await axios.get("https://httpbin.org/get");
      if (response.status === 200) {
        console.info("data", response.data);
        this.dispatch(incrementAmount(100));
        this.dispatch(push("/file-upload"));
      } else {
        throw new Error(`Exception ${response.status}`);
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      this.dispatch(fetchRequestFinish());
    }
  }
}

export default connect(
  (state: ReduxState) => ({ value: state.counter }),
  (dispatch: Dispatch<ReduxAction>) => ({
    actions: new ActionDispatcher(dispatch)
  })
)(Counter);
