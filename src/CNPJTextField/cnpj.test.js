/* eslint-env mocha */
import { chai } from 'meteor/practicalmeteor:chai';
import isValidCNPJ from './index';

describe('Company', () => {
  it('check CNPJ\'s are invalid', () => {
    const invalidValues = [
      '',
      null,
      '00000000000000',
      '11111111111111',
      '22222222222222',
      '33333333333333',
      '44444444444444',
      '55555555555555',
      '66666666666666',
      '77777777777777',
      '88888888888888',
      '99999999999999',
      '9',
      '111111111111111',
      '25127768000152',
    ];
    invalidValues.map(v => chai.assert(!isValidCNPJ(v), `${v} is not valid`));
  });
  it('check CNPJ\'s are valid', () => {
    const invalidValues = [
      '71.412.178/0001-98',
      '71 412 178 0001 98',
      '71412178000198',
      '16815312000193',
      '25127768000151',
      '30038156000122',
    ];
    invalidValues.map(v => chai.assert(isValidCNPJ(v), `${v} is valid`));
  });
});

