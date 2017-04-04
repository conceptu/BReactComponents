import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import ref from "/imports/lib/component_ref";
import { MaskedInput } from 'react-text-mask';
import isValidCNPJ from '/src/validations/cnpj.js';
import { defaultNonEditingStyle } from '/src/styles/styles.js';
import i18n from 'meteor/universe:i18n';

export default class CNPJTextField extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  handleChange(event) {
    const newValue = event.target.value;
    this.setState({value: newValue});
    if (newValue.length == 18) {
      this.setState({hasCNPJError: !isValidCNPJ(newValue)});
    }
  };

  getValue() {
    return this.state.value;
  }

  render() {
    const { placeholder, parent, refName, errorMessage } = this.props;
    if (this.props.editing) {
      return (
        <TextField 
          fullWidth
          hintText={placeholder} 
          floatingLabelText={placeholder} 
          name='cnpjInput'
          ref={(c) => {
            if (c && c.input && c.input.inputElement && parent && refName) {
              parent[refName] = c.input.inputElement;
              
            }}}
          errorText={this.state.hasCNPJError ? errorMessage : null} >
            <MaskedInput 
              guide={false}
              mask={[/[1-9]/,/\d/,'.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/, '/', /\d/, /\d/, /\d/,/\d/,'-',/\d/,/\d/]}
              value={this.state.value}
              onChange={this.handleChange}
            />
        </TextField>
      );
    } else {
      return (
        <div>
          <div style={defaultNonEditingStyle}>
            {this.state.value}
          </div>
          <Divider />
        </div>
      );
    }
  }

}