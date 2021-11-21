import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PinInput from '../components/PinInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/PinInput',
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
      onChange={(value, index, values) => {
        setValues(values);
        console.log(value, index, values);
      }}
      onComplete={(values) => console.log(values)}
    />
  );
};

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  values: ['', '', '', ''],
  type: 'number',
  mask: false,
  showState: true,
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

export const Validation = Template.bind({});

Validation.args = {
  values: ['a', 'b', 'd', ''],
  type: 'text',
  validate: 'abc',
  showState: true,
};
