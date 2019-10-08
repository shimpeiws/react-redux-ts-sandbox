import * as React from "react";
import { SignupState } from "./Module";
import { ActionDispatcher } from "./Container";
import { client as Auth0Client } from "../../lib/Auth0";

export interface Props {
  value: SignupState;
  actions: ActionDispatcher;
}

export const Signup: React.FC<Props> = props => {
  const [signin, setSignin] = React.useState(false);

  React.useEffect(() => {
    const init = async () => {
      const r = await isSginIn();
      setSignin(r);
    };
    init();
  }, []);

  const handleSignup = () => {
    props.actions.signup();
  };

  const isSginIn = async (): Promise<boolean> => {
    const client = await Auth0Client();
    const user = client.getUser();
    return !!user;
  };

  const showSignin = () => {
    if (signin) {
      return <p>Logout</p>;
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
