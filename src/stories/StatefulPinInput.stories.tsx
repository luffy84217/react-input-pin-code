import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StatefulPinInput from '../components/StatefulPinInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/StatefulPinInput',
  component: StatefulPinInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof StatefulPinInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StatefulPinInput> = (args) => (
  <StatefulPinInput {...args} />
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  length: 4,
  InitialValue: '',
  type: 'number',
  mask: false,
  size: 'md',
  showState: true,
  autoFocus: false,
  autoTab: true,
  placeholder: 'o',
};

export const CustomLength = Template.bind({});

CustomLength.args = {
  length: 7,
};

export const InitialValue = Template.bind({});

InitialValue.args = {
  length: 4,
  initialValue: '1234',
};
