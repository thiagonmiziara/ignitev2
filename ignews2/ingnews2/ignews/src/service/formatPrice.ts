export function formatPrice(location: string, currency: string, value: number) {
  return new Intl.NumberFormat(`${location}`, {
    style: "currency",
    currency: `${currency}`,
  }).format(value);
}
