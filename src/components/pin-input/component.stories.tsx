import type { Meta, StoryObj } from '@storybook/react';

import { PinInput } from './component';

import type { Component } from './types';
import { useState } from 'react';
import { SIZE_LARGE } from '../../constants';

type Story = StoryObj<Component>;

export default {
  title: 'Components/PinInput',
  component: PinInput,
  render: function Render({
    values: argsValues,
    type: argsType,
    mask: argsMask,
    size: argsSize,
    validate: argsValidate,
    format: argsFormat,
    showState: argsShowState,
    autoFocus: argsAutoFocus,
    autoTab: argsAutoTab,
    containerClassName: argsContainerClassName,
    containerStyle: argsContainerStyle,
    inputClassName: argsInputClassName,
    inputStyle: argsInputStyle,
    borderColor: argsBorderColor,
    errorBorderColor: argsErrorBorderColor,
    focusBorderColor: argsFocusBorderColor,
    validBorderColor: argsValidBorderColor,
    'aria-describedby': argsAriaDescribedby,
    'aria-label': argsAriaLabel,
    'aria-labelledby': argsArialabelledby,
    autoComplete: argsAutoComplete,
    disabled: argsDisabled,
    id: argsId,
    inputMode: argsInputMode,
    name: argsName,
    placeholder: argsPlaceholder,
    required: argsRequired,
    onChange: argsOnChange,
    onComplete: argsOnComplete,
    onBlur: argsOnBlur,
    onFocus: argsOnFocus,
    onKeyDown: argsOnKeyDown,
  }) {
    const [value, setValue] = useState(argsValues);

    return (
      <PinInput
        values={value}
        type={argsType}
        mask={argsMask}
        size={argsSize}
        validate={argsValidate}
        format={argsFormat}
        showState={argsShowState}
        autoFocus={argsAutoFocus}
        autoTab={argsAutoTab}
        containerClassName={argsContainerClassName}
        containerStyle={argsContainerStyle}
        inputClassName={argsInputClassName}
        inputStyle={argsInputStyle}
        borderColor={argsBorderColor}
        errorBorderColor={argsErrorBorderColor}
        focusBorderColor={argsFocusBorderColor}
        validBorderColor={argsValidBorderColor}
        aria-describedby={argsAriaDescribedby}
        aria-label={argsAriaLabel}
        aria-labelledby={argsArialabelledby}
        autoComplete={argsAutoComplete}
        disabled={argsDisabled}
        id={argsId}
        inputMode={argsInputMode}
        name={argsName}
        placeholder={argsPlaceholder}
        required={argsRequired}
        onChange={(...args) => {
          argsOnChange?.(...args);
          setValue(args[2]);
        }}
        onComplete={argsOnComplete}
        onBlur={argsOnBlur}
        onFocus={argsOnFocus}
        onKeyDown={argsOnKeyDown} />
    );
  },
  args: {
    values: ['', '', '', ''],
  },
  argTypes: {
    'aria-label': {
      control: 'text',
      description: 'Input aria label',
    },
    mask: {
      control: 'boolean',
      description: 'Input masking',
    },
  },
} satisfies Meta<Component>;

export const Default: Story = {};

export const PinLength: Story = {
  args: {
    values: ['', '', '', '', '', '', ''],
  },
};

export const Size: Story = {
  args: {
    values: ['', '', '', '', '', '', ''],
    size: SIZE_LARGE,
  },
};

export const TextInput: Story = {
  args: {
    values: ['', '', '', ''],
    type: 'text',
  },
};

export const Masking: Story = {
  args: {
    values: ['', '', '', ''],
    mask: true,
  },
};

export const IDAndName: Story = {
  args: {
    values: ['', '', '', ''],
    id: 'foo',
    name: 'bar',
  },
};

export const ClassName: Story = {
  args: {
    values: ['', '', '', ''],
    containerClassName: 'pin-field-container',
    inputClassName: 'pin-field',
  },
};

export const Validation: Story = {
  args: {
    values: ['a', 'b', 'd', ''],
    type: 'text',
    validate: 'abc',
    showState: true,
  },
};

export const Formatter: Story = {
  args: {
    values: ['', '', '', ''],
    type: 'text',
    format: (char: string) => char.toUpperCase(),
  },
};

export const Disabled: Story = {
  args: {
    values: ['', '', '', ''],
    disabled: true,
  },
};

export const BorderColor: Story = {
  args: {
    values: ['', '', '', ''],
    errorBorderColor: 'rgb(220, 53, 69)',
    focusBorderColor: '#0d6efd',
    validBorderColor: 'rgb(25, 135, 84)',
  },
};

export const CustomStyle: Story = {
  args: {
    values: ['', '', '', ''],
    containerStyle: {
      backgroundColor: 'orange',
    },
    inputStyle: {
      backgroundColor: 'yellow',
    },
  },
};

export const CustomPlaceholder: Story = {
  args: {
  values: ['', '', '', ''],
  placeholder: '😀',
  },
};

export const AutoFocu: Story = {
  args: {
    values: ['', '', '', ''],
    autoFocus: true,
  },
};

export const DisableAutoTab: Story = {
  args: {
    values: ['', '', '', ''],
    autoTab: false,
  },
};
