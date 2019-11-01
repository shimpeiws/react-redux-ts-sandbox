import { Signup } from "./Signup";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ReduxAction, ReduxState } from "../../store";
import {
  isSignin,
  loginWithPopup,
  logout,
  passwordless
} from "../../lib/Auth0";
import { requestStart, requestFinish, setSignin } from "./Module";

export class ActionDispatcher {
  dispatch: (action: any) => any;

  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch;
  }

  public async init() {
    this.dispatch(requestStart());
    try {
      const r = await isSignin();
      this.dispatch(setSignin(r));
    } catch (err) {
      console.info(err);
    } finally {
      this.dispatch(requestFinish());
    }
  }

  public async signup() {
    await loginWithPopup();
    const r = await isSignin();
    this.dispatch(setSignin(r));
  }

  public async logout() {
    await logout();
    this.dispatch(setSignin(false));
  }

  public passwordless() {
    passwordless();
  }
}

export default connect(
  (state: ReduxState) => ({ value: state.signup }),
  (dispatch: Dispatch<ReduxAction>) => ({
    actions: new ActionDispatcher(dispatch)
  })
)(Signup);
