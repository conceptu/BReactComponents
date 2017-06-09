import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import { MaskedInput } from 'react-text-mask';
import { nonEditingStyle } from '../styles/styles.js';
import removeMask from '../validations/removeMask.js';

export default class RootMaskedTextField extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let newValue = event.target.value;
    const oldValue = this.state.value;
    if (removeMask(oldValue) === removeMask(newValue) // If the unmasked value is the same as the old value, 
      && newValue.length !== this.mask.length) {      // and this is not the last characte,
        newValue = newValue.slice(0,- 1);             // we're trying to erase a mask element, since it'll just be readded, we must erase the previous character as well
    }
    this.setState({value:newValue});
    return newValue;
  }

  getValue() {
    return removeMask(this.state.value);
  }

  render() {
    const { placeholder, errorMessage } = this.props;
    if (this.props.editing) {
      return (
        <TextField
          fullWidth
          hintText={placeholder}
          floatingLabelText={placeholder}
          name={this.inputName}
          errorText={this.state.hasError ? errorMessage : null} >
            <MaskedInput
              guide={false}
              mask={this.mask}
              value={this.state.value}
              onChange={this.handleChange}
            />
        </TextField>
      );
    } else {
      return (
        <div>
          <div style={nonEditingStyle}>
            {this.state.value}
          </div>
          <Divider />
        </div>
      );
    }
  }
}
