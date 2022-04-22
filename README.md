# React Input Pin Code

[![Validate](https://github.com/luffy84217/react-input-pin-code/actions/workflows/validate.yml/badge.svg)](https://github.com/luffy84217/react-input-pin-code/actions/workflows/validate.yml)
[![CircleCI](https://circleci.com/gh/luffy84217/react-input-pin-code/tree/main.svg?style=shield)](https://circleci.com/gh/luffy84217/react-input-pin-code/tree/main)
[![Build Status](https://app.travis-ci.com/luffy84217/react-input-pin-code.svg?branch=main)](https://app.travis-ci.com/luffy84217/react-input-pin-code)
[![codecov](https://codecov.io/gh/luffy84217/react-input-pin-code/branch/main/graph/badge.svg?token=QSHM2A3C5V)](https://codecov.io/gh/luffy84217/react-input-pin-code)
![npm](https://img.shields.io/npm/v/react-input-pin-code)
![NPM](https://img.shields.io/npm/l/react-input-pin-code)
[![storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://luffy84217.github.io/react-input-pin-code/)

> An accessible and simple pin input component built with styled-components for ReactJS.

## Demo

![image](https://user-images.githubusercontent.com/28497046/147468428-b1bb0e98-70a3-4874-b9e8-b9701fdb2781.png)

[Here](https://luffy84217.github.io/react-input-pin-code/) to see documentation and examples.

Source code at https://github.com/luffy84217/react-input-pin-code.

## Installation

To get started, install and save in your `package.json` dependencies, run:

```bash
npm install react-input-pin-code styled-components
```
or
```bash
yarn add react-input-pin-code styled-components
```

Please note that [styled-components](https://styled-components.com/) is peer dependency.

## Importing

You can use the following two ways to import module.

```javascript
import { PinInput } from 'react-input-pin-code' // ES Module
or
var PinInput = require('react-input-pin-code').PinInput // CommonJS Module
```

## Usage
### Basic Example
```jsx
import React from 'react';
import { PinInput } from 'react-input-pin-code';

export default () => {
  const [values, setValues] = React.useState(['', '', '']);

  return (
    <PinInput
      values={values}
      onChange={(value, index, values) => setValues(values)}
    />
  );
};
```

Filling one character at a time for each input. When a character is entered, the focus transfers to the next input automatically in the sequence until all inputs are filled in. Here is the explanation of behavior below:

* You can fill in only one character per input.
* To overwrite the value of an input, you donʼt need to select the text in the input. If you type a digit while the input is focused, the input will update.
* Pressing `Backspace` when it is empty in the input will move focus to the previous input (if any) and clear the value of.

## Pin input length

`PinInput` expects an array of strings for the `values` prop. The number of input fields rendered is equal to the length of the array.

## Passing id, className and name

You can pass `id` or `name` or `containerClassName` or `inputClassName` prop.ClassName and name will be shared amongst the inputs, which means they will each have their name set to this value, it is comfortable for the use of pseudo element in `global.css` file. id will append an index to any string you provide and pass to the corresponding input. For example, if you pass foo as id and bar as name and there are four inputs, the resulting ids are **foo-0**, **foo-1**, **foo-2**, and **foo-3** and each input has the name bar.

## Size of input

You can control the size of the inputs with the `size` prop. It comes in four sizes.

| Variety  | Size  | Font Size |
| :------------: |---------------:| -----:|
| xs | 1.5rem (24px) | 0.75rem (12px)    |
| sm | 2rem (32px)   |   0.875rem (14px) |
| md | 2.5rem (40px) |    1rem (16px)    |
| lg | 3rem (48px)   |    1.125rem (18px)|


## Allowing alphanumeric input values

By default, the `PinInput` is passed **number** as `type` prop so it accepts only numeric values to show up. To add support for alphanumeric values, pass the `type` prop and set its value to either **text** or **number**.

## Validate & Format

`PinInput` provides `validate` prop to specify native attribute `pattern`, which is a regular expression which the input's value must match in order for the value to pass [constraint validation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation).

`Format` prop specify a pure function to transform raw input. For example, to set the values to upper case: 

`(char: string) => char.toUpperCase()`

## Valid & Invalid state

You can pass `validate` prop to validate input values, if value of the input doesn't match test, it will show error border instantly enter, while it will only show valid border after all inputs are filled in and pass validation.

You can disable this behavior by setting `showState` prop to **false**.

## Adding mask

You can set `mask` prop to **true** to prevent from showing input values. It is equivalent to setting input native attribute `type` to **password**.

## Disable focus management

By default, `PinInput` moves focus automatically to the next input once a field is filled. It also transfers focus to a previous input when `Backspace` is pressed with focus on an empty input.

To disable this behavior, set `autoTab` prop to **false**

## AutoFocus

`PinInput` offers a way let it focus from the start. Simply set `autoFocus` prop to **true** to focus the first input upon initial mounting of the component.

## Once all inputs are filled in

`PinInput` provides `onComplete` event handler to access input values, unlike `onChange`, `onComplete` only triggers when all inputs are filled in.
> **NOTICE** if you offer a list of allowed characters to `validate` prop, `onComplete` will trigger ony when all input values pass validation.

## Changing the placeholder

By default, `PinInput` placeholder is (○), you can change that if you want.

## AutoFill and Copy + Paste
Try copying & pasting 1234 into any of the inputs.

By default, you can only change one input at a time, but if one of the input field receives a longer string by pasting into it, `PinInput` attempts to validate the string and fill the other inputs.

## Stateful (uncontrolled) Pin Input

There is also an [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) version, `StatefulPinInput`, which manages its own state. The default input length for this component is four, but you can change that by passing **number** to `length` prop. Aslo you can pass `initialValue` as an initial value for `StatefulPinInput`.

```jsx
import React from 'react';
import { StatefulPinInput } from 'react-input-pin-code';

export default () => {
  return (
    <StatefulPinInput
      length={4}
      initialValue="1234"
    />
  );
};
```

## API

**`PinInput` Props**

| Name(*required) | Type | Default | Description |
| :-------------- | :--- | :------ | :---------- |
| aria-describedby | string |  | Sets aria-describedby attribute. |
| aria-label | string | "Please enter pin code" | Sets aria-label attribute. |
| aria-labelledby | string |  | Sets aria-labelledby attribute. |
| autoComplete | string | "off" | Determines if browser should provide value suggestions. |
| autoFocus | boolean | false | If true the input will be focused on the first mount. |
| autoTab | boolean | true | If true focus will move automatically to the next/previous input once filled or deleted |
| borderColor | string | rgb(204,204,204) | Let you customize border color when the input is not focused.
| errorBorderColor | string | rgb(220,53,69) | Let you customize border color when the input is invalid.
| focusBorderColor | string | rgb(13,110,253) | Let you customize border color when the input is focused.
| validBorderColor | string | rgb(25,135,84) | Let you customize border color when the input is valid.
| disabled | boolean |  | Renders component in disabled state. |
| format | (char: string) => string |  | Pure function to transform raw input. |
| id | string |  | Id attribute value to be added to the input element and as a label's for attribute value. |
| inputMode | string |  | This attribute allows a browser to display an appropriate virtual keyboard. (**NOTE** `type` prop will determine appropriate `inputMode` automatically. if you pass `inputMode` prop, it will override built-in `inputMode`.) |
| mask | boolean | false | Prevent from showing the pin code |
| name | string |  | Name attribute. |
| onBlur | (event: React.FocusEvent) => void |  | Called the onBlur event triggers.
| onChange | (value: string &#124; string[], index: number, values: string[]) => void |  | Called when input value is changed. |
| onComplete | (values: string[]) => void |  | Called when all inputs are filled in and validated |
| onFocus | (event: React.FocusEvent) => void |  | Called the onFocus event triggers. |
| onKeyDown | (event: React.KeyboardEvent) => void |  | Called the onKeyDown event triggers. |
| placeholder | string | "o" | Displayed when the pin code is not entered yet. |
| required | boolean |  | Renders component in required state. |
| showState | boolean | true | Determine whether valid/invalid border shows up or not. |
| size | "xs" &#124; "sm" &#124; "md" &#124; "lg" | "md" | Renders component in provided size. |
| containerStyle | object | {} | Lets you customize container element. |
| inputStyle | object | {} | Lets you customize input element. |
| type | "number" &#124; "text" | "number" | The type of values the pin-input should allow |
| validate | string &#124; string[] &#124; RegExp |  | A regular expression which the input's value must match in order for the value to pass [constraint validation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation). |
| values(*) | string[] |  | PinInput value attribute. |

**`StatefulPinInput` Props**

| Name  | Type  | Default | Description |
| :------------ |:--------- | :------| :-----|
| length | number | 4 | The number of input fields. |
| initialValue | string &#124; string[] | "" | The initial value of the pin input. |

## License

MIT
