import * as React from "react";
import createAuth0Client from "@auth0/auth0-spa-js";

export interface Props {}

export const Signup: React.FC<Props> = props => {
  console.info("createAuth0Client", createAuth0Client);
  return (
    <div>
      <h2>Signup</h2>
    </div>
  );
};
