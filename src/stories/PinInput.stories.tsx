import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PinInput from '../components/PinInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/PinInput',
  component: PinInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PinInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PinInput> = (args) => {
  const [values, setValues] = useState(args.values);

  return (
    <PinInput
      {...args}
      values={values}
      onChange={(_value, _index, values) => setValues(values)}
    />
  );
};

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  values: ['', '', '', ''],
  type: 'number',
  mask: false,
  size: 'md',
  showState: true,
  autoFocus: false,
  autoTab: true,
  placeholder: 'o',
};

export const PinLength = Template.bind({});

PinLength.args = {
  values: ['', '', '', '', '', '', ''],
};

export const Size = Template.bind({});

Size.args = {
  values: ['', '', '', '', '', '', ''],
  size: 'lg',
};

export const TextInput = Template.bind({});

TextInput.args = {
  values: ['', '', '', ''],
  type: 'text',
};

export const Masking = Template.bind({});

Masking.args = {
  values: ['', '', '', ''],
  mask: true,
};

export const IDAndName = Template.bind({});

IDAndName.args = {
  values: ['', '', '', ''],
  id: 'foo',
  name: 'bar',
};

export const ClassName = Template.bind({});

ClassName.args = {
  values: ['', '', '', ''],
  containerClassName: 'pin-field-container',
  inputClassName: 'pin-field',
};

export const Validation = Template.bind({});

Validation.args = {
  values: ['a', 'b', 'd', ''],
  type: 'text',
  validate: 'abc',
  showState: true,
};

export const Formatter = Template.bind({});

Formatter.args = {
  values: ['', '', '', ''],
  type: 'text',
  format: (char: string) => char.toUpperCase(),
};

export const Disabled = Template.bind({});

Disabled.args = {
  values: ['', '', '', ''],
  disabled: true,
};

export const BorderColor = Template.bind({});

BorderColor.args = {
  values: ['', '', '', ''],
  errorBorderColor: 'rgb(220, 53, 69)',
  focusBorderColor: '#0d6efd',
  validBorderColor: 'rgb(25, 135, 84)',
};

export const CustomStyle = Template.bind({});

CustomStyle.args = {
  values: ['', '', '', ''],
  containerStyle: {
    backgroundColor: 'orange',
  },
  inputStyle: {
    backgroundColor: 'yellow',
  },
};

export const CustomPlaceholder = Template.bind({});

CustomPlaceholder.args = {
  values: ['', '', '', ''],
  placeholder: '😀',
};

export const AutoFocu = Template.bind({});

AutoFocu.args = {
  values: ['', '', '', ''],
  autoFocus: true,
};

export const DisableAutoTab = Template.bind({});

DisableAutoTab.args = {
  values: ['', '', '', ''],
  autoTab: false,
};
