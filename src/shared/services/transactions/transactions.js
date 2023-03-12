import api from "../api";

export function getTransactions(token) {
  return api.get("/transactions", null, token);
}

export function createTransaction(body, token) {
  return api.post("/transactions", body, token);
}

export function updateTransaction(body, token, id) {
  return api.put(`/transactions/${id}`, body, token);
}
