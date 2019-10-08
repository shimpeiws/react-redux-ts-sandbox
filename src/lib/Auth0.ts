import createAuth0Client from "@auth0/auth0-spa-js";
import Auth0Client from "@auth0/auth0-spa-js/dist/typings/Auth0Client";

export async function client(): Promise<Auth0Client> {
  return createAuth0Client({
    domain: "YOUR-DOMAIN-HERE",
    client_id: "YOUR-CLIENT-ID-HERE"
  });
}
