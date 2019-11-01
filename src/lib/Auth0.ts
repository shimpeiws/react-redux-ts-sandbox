import createAuth0Client from "@auth0/auth0-spa-js";
import Auth0Client from "@auth0/auth0-spa-js/dist/typings/Auth0Client";

declare function require(x: string): any;

async function client(): Promise<Auth0Client> {
  return createAuth0Client({
    domain: "YOUR-DOMAIN-HERE",
    client_id: "YOUR-CLIENT-ID-HERE"
  });
}

function pwasswordlessClient(): any {
  const lock = require("auth0-lock"); // eslint-disable-line @typescript-eslint/no-var-requires
  var options = {
    closable: false
  };
  return new lock.Auth0LockPasswordless(
    "YOUR-CLIENT-ID-HERE",
    "YOUR-DOMAIN-HERE",
    options
  );
}

export async function loginWithPopup() {
  const c = await client();
  await c.loginWithPopup();
}

export function passwordless() {
  const c = pwasswordlessClient();
  c.show();
}

export async function isSignin(): Promise<boolean> {
  const c = await client();
  const user = await c.getUser();
  return !!user;
}

export async function logout() {
  const c = await client();
  c.logout();
}
