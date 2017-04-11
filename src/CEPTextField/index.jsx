import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import { MaskedInput } from 'react-text-mask';
import isValidCNPJ from '../validations/cnpj.js';
import { nonEditingStyle } from '../styles/styles.js';
import RootMaskedTextField from '../RootMaskedTextField';

export default class CEPTextField extends RootMaskedTextField  {

  constructor(props) {
    super(props);
    this.inputName = 'CEPTextField';
    this.mask = [/[1-9]/, /\d/, /\d/, /\d/,/\d/,'-',/\d/,/\d/,/\d/];
  }

}
