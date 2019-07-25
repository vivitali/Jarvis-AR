import { AsyncStorage } from "react-native";

export const request = async ({ url, method, body }) => {
  const userToken = await AsyncStorage.getItem("userToken");
  const token = JSON.parse(userToken) && JSON.parse(userToken).idToken;

  return fetch(url, {
    method,
    headers: new Headers({
      Authorization: `Bearer ${token}`
    }),
    body
  });
};
