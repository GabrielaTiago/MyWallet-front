import api from "../api";

export function signUp(body) {
  const response = api.post("/sign-up", body);

  return response;
}
