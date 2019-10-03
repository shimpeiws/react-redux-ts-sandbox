import { Signup } from "./Signup";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ReduxAction, ReduxState } from "../../store";
import createAuth0Client from "@auth0/auth0-spa-js";

export class ActionDispatcher {
  dispatch: (action: any) => any;

  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch;
  }

  public async signup() {
    const auth0 = await createAuth0Client({
      domain: "high-pine.auth0.com",
      client_id: "79W2F6QdUcGMe0CA3F8UlY3mKR8Cvm9j"
    });
    await auth0.loginWithPopup();
    const user = await auth0.getUser();
    console.log(user);
  }
}

export default connect(
  (state: ReduxState) => ({ value: state.signup }),
  (dispatch: Dispatch<ReduxAction>) => ({
    actions: new ActionDispatcher(dispatch)
  })
)(Signup);
