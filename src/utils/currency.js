export default function formatNumber(value, numberOptions = {}) {
  const options = {};
  if (numberOptions.currency) {
    options.style = "currency";
    options.currency = numberOptions.currency;
  }

  if (numberOptions.digits) {
    options.minimumFractionDigits = numberOptions.digits;
    options.maximumFractionDigits = numberOptions.digits;
  }

  return new Intl.NumberFormat("en-US", options).format(value);
}
