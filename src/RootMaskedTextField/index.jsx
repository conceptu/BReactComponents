import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import { MaskedInput } from 'react-text-mask';
import { nonEditingStyle } from '../styles/styles.js';
import RootTextField from './RootMaskedTextField';

export default class RootMaskedTextField extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    const { parent, refName } = props;
    if (parent && refName) {
      parent[refName] = this;
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value:event.target.value});

  }

  getValue() {
    return this.state.value;
  }

  render() {
    const { placeholder, refName, errorMessage } = this.props;
    if (this.props.editing) {
      return (
        <TextField 
          fullWidth
          hintText={placeholder} 
          floatingLabelText={placeholder} 
          name={refName}
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
