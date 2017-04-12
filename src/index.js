import CNPJTextField from './CNPJTextField';
import CPFTextField from './CPFTextField';
import CEPTextField from './CEPTextField';

import isValidCPF from './validations/cpf';
import isValidCNPJ from './validations/cnpj';


exports.CNPJTextField = CNPJTextField;
exports.CPFTextField = CPFTextField;
exports.CEPTextField = CEPTextField;

exports.isValidCNPJ = isValidCNPJ;
exports.isValidCPF = isValidCPF;
