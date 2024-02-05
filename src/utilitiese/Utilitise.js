const CURRNECY_FORMATER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export function FormatCurrency(number) {
  return CURRNECY_FORMATER.format(number);
}
