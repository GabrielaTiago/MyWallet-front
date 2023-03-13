export function formatMoney(amount) {
  const formatedAmount = amount.toFixed(2).replace("-", "").replace(".", ",");

  return formatedAmount;
}
