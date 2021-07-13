export function convertCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function convertDate(value: string) {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(value));
}
