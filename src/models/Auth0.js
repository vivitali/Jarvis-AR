import Auth0 from "react-native-auth0";
import config from "react-native-config";

export const auth0 = new Auth0({
  domain: config.AUTH0_DOMAIN,
  clientId: config.AUTH0_CLIENT_ID
});

export const realm = {
  audience: config.AUTH0_AUDIENCE,
  scope: "openid",
  realm: "Username-Password-Authentication"
};
