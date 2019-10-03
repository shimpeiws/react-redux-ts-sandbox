import * as React from "react";
import { SignupState } from "./Module";
import { ActionDispatcher } from "./Container";

export interface Props {
  value: SignupState;
  actions: ActionDispatcher;
}

export const Signup: React.FC<Props> = props => {
  const handleSignup = () => {
    props.actions.signup();
  };

  return (
    <div>
      <h2>Signup</h2>
      {props.value.loading}
      <button onClick={() => handleSignup()}>signup</button>
    </div>
  );
};
