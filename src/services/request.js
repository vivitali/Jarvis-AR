import { AsyncStorage } from "react-native";

export const request = async ({ url, method, body }) => {
  const token = await AsyncStorage.getItem("userToken");

  return fetch(url, {
    method,
    headers: new Headers({
      Authorization: `Bearer ${token}`
    }),
    body
  });
};
