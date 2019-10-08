import createAuth0Client from "@auth0/auth0-spa-js";
import Auth0Client from "@auth0/auth0-spa-js/dist/typings/Auth0Client";

export async function client(): Promise<Auth0Client> {
  return createAuth0Client({
    domain: "YOUR-DOMAIN-HERE",
    client_id: "YOUR-CLIENT-ID-HERE"
  });
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
