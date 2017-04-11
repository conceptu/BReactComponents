import removeMask from './removeMask.js';

// Code based on from https://github.com/tiagoporto/gerador-validador-cpf/blob/master/src/scripts/CPF_SEPARATE.js

export default function isValidCPF(value) {
  const cpf = removeMask(value);
  if (!cpf || cpf.length !== 11 || isKnownInvalidCPF(cpf)) {
    return false;
  }
  const firstNineDigits = cpf.substring(0, 9);
  const checker = cpf.substring(9, 11);

  const checker1 = getCPFValidationDigit(firstNineDigits);
  const checker2 = getCPFValidationDigit(firstNineDigits.toString() + checker1.toString());

  return checker.toString() === checker1.toString() + checker2.toString();
}

function isKnownInvalidCPF(value) {
  return value === '00000000000' ||
    value === '11111111111' ||
    value === '22222222222' ||
    value === '33333333333' ||
    value === '44444444444' ||
    value === '55555555555' ||
    value === '66666666666' ||
    value === '77777777777' ||
    value === '88888888888' ||
    value === '99999999999';
}

function getCPFValidationDigit(value) {
  const numberOfDigits = value.length;
  let sum = 0;
  for (let k = 0; k < numberOfDigits; k += 1) {
    sum += value.toString().charAt(k) * (numberOfDigits + (1 - k));
  }

  const remainder = sum % 11;

  return (remainder < 2) ? 0 : 11 - remainder;
}
