export const getToken = (): string | null => sessionStorage.getItem("token");

export const removeUserSession = () => sessionStorage.removeItem("token");

export const setUserSession = (token: string) =>
  sessionStorage.setItem("token", token);
