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
    />
  );
};

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  values: ['', '', '', ''],
};

export const PinLength = Template.bind({});

PinLength.args = {
  values: ['', '', '', '', '', '', ''],
};
