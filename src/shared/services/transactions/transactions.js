import api from "../api";

export function getTransactions(token) {
  return api.get("/transactions", null, token);
}
