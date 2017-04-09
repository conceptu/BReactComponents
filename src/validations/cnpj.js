import removeMask from './removeMask';

export default function isValidCNPJ(value) {
  const cnpj = removeMask(value);
  if (!cnpj || cnpj.length !== 14 || isKnownInvalid(cnpj)) {
    return false;
  }
  let size = cnpj.length - 2;
  let numbers = cnpj.substring(0, size);
  const validationDigits = cnpj.substring(size);
  let sum = 0;
  let currentPosition = size - 7;
  for (let i = size; i >= 1; i -= 1) {
    sum += numbers.charAt(size - i) * currentPosition;
    currentPosition -= 1;
    if (currentPosition < 2) {
      currentPosition = 9;
    }
  }
  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== validationDigits.charAt(0)) {
    return false;
  }
  size += 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  currentPosition = size - 7;
  for (let i = size; i >= 1; i -= 1) {
    sum += numbers.charAt(size - i) * currentPosition;
    currentPosition -= 1;
    if (currentPosition < 2) {
      currentPosition = 9;
    }
  }
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  return result === validationDigits.charAt(1);
}

function isKnownInvalid(value) {
  // Known invalid cnpjs
  return value === '00000000000000' ||
    value === '11111111111111' ||
    value === '22222222222222' ||
    value === '33333333333333' ||
    value === '44444444444444' ||
    value === '55555555555555' ||
    value === '66666666666666' ||
    value === '77777777777777' ||
    value === '88888888888888' ||
    value === '99999999999999';
}
