import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StatefulPinInputProps } from '../types/StatefulPinInput';
import PinInput from './PinInput';

const propTypes = {
  length: PropTypes.number,
  initialValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  type: PropTypes.oneOf<'number' | 'text'>(['number', 'text']),
  mask: PropTypes.bool,
  validate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.instanceOf(RegExp),
  ]),
  format: PropTypes.func,
  showState: PropTypes.bool,
  size: PropTypes.oneOf<'xs' | 'sm' | 'md' | 'lg'>(['xs', 'sm', 'md', 'lg']),
  autoFocus: PropTypes.bool,
  autoTab: PropTypes.bool,
  containerStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  onChange: PropTypes.func,
};

const StatefulPinInput: React.FC<StatefulPinInputProps> = ({
  length,
  initialValue,
  onChange,
  ...props
}) => {
  const [values, setValues] = useState(
    Array.from({ length }, (_v, i) => initialValue[i] || '')
  );

  const handleInputChange = (
    value: string | string[],
    index: number,
    values: string[]
  ) => {
    setValues(values);
    if (onChange) {
      onChange(value, index, values);
    }
  };

  return <PinInput values={values} onChange={handleInputChange} {...props} />;
};

StatefulPinInput.displayName = 'StatefulPinInput';
StatefulPinInput.propTypes = propTypes;
StatefulPinInput.defaultProps = {
  length: 4,
  initialValue: '',
  type: 'number',
  mask: false,
  showState: true,
  size: 'md',
  autoFocus: false,
  autoTab: true,
  containerStyle: {},
  inputStyle: {},
  autoComplete: 'off',
  placeholder: 'o',
  'aria-label': 'Please enter pin code',
};

export default StatefulPinInput;
