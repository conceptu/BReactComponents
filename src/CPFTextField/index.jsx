import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import { MaskedInput } from 'react-text-mask';
import isValidCPF from '../validations/cpf.js';
import { nonEditingStyle } from '../styles/styles.js';
import RootMaskedTextField from '../RootMaskedTextField';

export default class CPFTextField extends RootMaskedTextField  {

  constructor(props) {
    super(props);
    this.mask = [/[0-9]/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'-',/\d/,/\d/];
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newValue = event.target.value;
    this.setState({value: newValue});
    if (newValue.length == 14) {
      this.setState({hasError: !isValidCPF(newValue)});
    }
  }
}
