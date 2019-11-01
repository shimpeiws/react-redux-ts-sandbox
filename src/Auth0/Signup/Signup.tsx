import * as React from "react";
import { SignupState } from "./Module";
import { ActionDispatcher } from "./Container";

export interface Props {
  value: SignupState;
  actions: ActionDispatcher;
}

export const Signup: React.FC<Props> = props => {
  React.useEffect(() => {
    const init = async () => {
      await props.actions.init();
    };
    init();
  }, []);

  const handleSignup = () => {
    props.actions.signup();
  };

  const handleLogout = () => {
    props.actions.logout();
  };

  const handlePasswordless = () => {
    props.actions.passwordless();
  };

  const showSignin = () => {
    if (props.value.signin) {
      return <button onClick={() => handleLogout()}>logout</button>;
    }
    return <button onClick={() => handleSignup()}>signup</button>;
  };

  return (
    <div>
      <h2>Signup</h2>
      {props.value.loading}
      {showSignin()}
      <button onClick={() => handlePasswordless()}>passwordless</button>
    </div>
  );
};
