import type { Meta, StoryObj } from '@storybook/react';

import { StatefulPinInput } from './component';

import type { Component } from './types';

type Story = StoryObj<Component>;

export default {
  title: 'Components/StatefulPinInput',
  component: StatefulPinInput,
  argTypes: {
    'aria-label': {
      control: 'text',
      description: 'Input aria label',
    },
  },
} satisfies Meta<Component>;

export const Default: Story = {};

export const CustomLength: Story = {
  args: {
    length: 7
  },
};

export const InitialValue: Story = {
  args: {
    length: 4,
    initialValue: '1234',
  },
};
