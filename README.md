# <span>&#x1f1e7;&#x1f1f7;</span> BReactComponents <span>&#x1f1e7;&#x1f1f7;</span>

### Reusable Material-UI React components for Brazilian apps


[![codebeat badge](https://codebeat.co/badges/3d8ca1c5-6f99-45e0-acb0-ccc0accdaf77)](https://codebeat.co/projects/github-com-conceptu-breactcomponents-master) 
[![travis badge](https://img.shields.io/travis/conceptu/BReactComponents.svg?style=flat-square)](https://travis-ci.org/conceptu/BReactComponents)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/conceptu/BReactComponents/raw/master/LICENSE)


***

# Getting started
1. Navigate to your project's folder and run `npm install breact-components --save`
2. Import components you wish to use

```javascript
import { CPFTextField, CNPJTextField, CEPTextField } from 'breact-components';
```

## Available parameters and methods

* `value : String(Optional)` Initial value
* `editing: boolean` Whether you want to allow the value to be edited or to simply display it.
* `placeholder: String(Optional)` Placeholder/tip to help the user.
* `errorMessage: String(Optional)` On validated fields (CPF and CNPJ), the message that will be shown in case validation fails.
* `getValue(): String` Returns the current value of the TextField, including the mask.
* `parent : Object(Optional)` See below.
* `refName : String(Optional)` See below.

#### About parent & refName
These properties are used together to make it easier for you to access your TextField. Instead going through all that react-DOM shenanigans simply type:
```javascript
// On your render method
return (
  <div>
    // Other form fields...
    <CEPTextField value={value} editing={true} placeholder={placeholder} parent={this} refName='myCEPTextField' />
    // Other form fields...
  </div>
);
// And on some other method in 'parent'
const cep = this.myCEPTextField.getValue();
```
