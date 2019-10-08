import * as React from "react";
import { SignupState } from "./Module";
import { ActionDispatcher } from "./Container";
import { isSignin } from "../../lib/Auth0";

export interface Props {
  value: SignupState;
  actions: ActionDispatcher;
}

export const Signup: React.FC<Props> = props => {
  const [signin, setSignin] = React.useState(false);

  React.useEffect(() => {
    const init = async () => {
      const r = await isSignin();
      setSignin(r);
    };
    init();
  }, []);

  const handleSignup = () => {
    props.actions.signup();
  };

  const handleLogout = () => {
    props.actions.logout();
  };

  const showSignin = () => {
    if (signin) {
      return <button onClick={() => handleLogout()}>logout</button>;
    }
    return <button onClick={() => handleSignup()}>signup</button>;
  };

  return (
    <div>
      <h2>Signup</h2>
      {props.value.loading}
      {showSignin()}
    </div>
  );
};
