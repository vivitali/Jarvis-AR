import Auth0 from "react-native-auth0";
import config from "../configs";

export const auth0 = new Auth0({
  domain: config.domain,
  clientId: config.clientId
});

export const realm = {
  audience: config.audience,
  realm: config.realm,
  scope: "openid"
};
