import { api } from "../../lib/api";

export function LoginAutentication(userEmail: string, userPassword: string) {
  return api
    .post("/user/login", {
      email: userEmail,
      password: userPassword,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
}

export function logout() {
  localStorage.removeItem("user");
}

export function isAuthenticated(): boolean {
  const user = localStorage.getItem("user");

  if (!user) {
    return false;
  }

  return true;
}
