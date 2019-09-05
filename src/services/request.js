import { AsyncStorage } from "react-native";

export const request = async ({ url, method, body }) => {
  const userToken = await AsyncStorage.getItem("userToken");
  const token = JSON.parse(userToken) && JSON.parse(userToken).accessToken;

  const response = await fetch(url, {
    method,
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(body)
  });

  return response.json();
};
