import { appUser } from "../models";

export const request = async ({ url, method, body }) => {
  const { accessToken } = await appUser.get();

  const response = await fetch(url, {
    method,
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(body)
  });

  return response.json();
};
