import React from 'react';
import PropTypes from 'prop-types';
import { PinInputContainer } from '../styles/PinInput';
import { PinInputProps } from '../types/PinInput';
import PinInputField from './PinInputField';

const propTypes = {
  values: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.oneOf<'number' | 'text'>(['number', 'text']),
  mask: PropTypes.bool,
  onChange: PropTypes.func,
};

const PinInput: React.FC<PinInputProps> = (props) => {
  return (
    <PinInputContainer>
      {props.values.map((value, i) => (
        <PinInputField key={i} index={i} value={value} {...props} />
      ))}
    </PinInputContainer>
  );
};

PinInput.displayName = 'PinInput';
PinInput.propTypes = propTypes;
PinInput.defaultProps = {
  type: 'number',
  mask: false,
};

export default PinInput;
