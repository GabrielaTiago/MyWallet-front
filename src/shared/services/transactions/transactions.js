import api from "../api";

export function getTransactions(token) {
  return api.get("/transactions", null, token);
}

export function createTransaction(body, token) {
  return api.post("/transactions", body, token);
}
