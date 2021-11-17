import React from 'react';
import PropTypes from 'prop-types';
import { PinInputContainer } from '../styles/PinInput';
import { PinInputProps } from '../types/PinInput';
import PinInputField from './PinInputField';

const propTypes = {
  values: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

const PinInput: React.FC<PinInputProps> = ({ values, onChange }) => {
  return (
    <PinInputContainer>
      {values.map((value, i) => (
        <PinInputField
          key={i}
          index={i}
          value={value}
          values={values}
          onChange={onChange}
        />
      ))}
    </PinInputContainer>
  );
};

PinInput.displayName = 'PinInput';
PinInput.propTypes = propTypes;

export default PinInput;
