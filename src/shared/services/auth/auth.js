import api from "../api";

export function signUp(body) {
  const response = api.post("/sign-up", body);
  return response;
}

export function signIn(body) {
  const response = api.post("/sign-in", body);
  return response;
}
