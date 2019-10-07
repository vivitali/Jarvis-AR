import config from "react-native-config";

export default {
  domain: config.AUTH0_DOMAIN || "domain",
  clientId: config.AUTH0_CLIENT_ID || "clientId",
  audience: config.AUTH0_AUDIENCE || "audience",
  realm: config.AUTH0_REALM || "realm",
  nodeJS: config.NODE_SERVER || ""
};
