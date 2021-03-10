import { setUserSession } from "../utils/auth";

const baseUrl = process.env.REACT_APP_BACKEND_API_BASE_URL;

export const handleLogin = (username: string, password: string) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  };

  fetch(`${baseUrl}/users/login/`, requestOptions)
    .then((response) => response.json())
    .then(({ token }) => setUserSession(token));
};
