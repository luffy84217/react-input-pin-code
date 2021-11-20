import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { PinInputContainer } from '../styles/PinInput';
import { PinInputProps } from '../types/PinInput';
import PinInputField from './PinInputField';
import { validateToPattern } from '../utils';

const propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.oneOf<'number' | 'text'>(['number', 'text']),
  mask: PropTypes.bool,
  validate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.instanceOf(RegExp),
  ]),
  showState: PropTypes.bool,
  onChange: PropTypes.func,
};

const PinInput: React.FC<PinInputProps> = (props) => {
  const completed = useMemo(
    () => props.values.every((val) => val),
    [props.values]
  );

  if (completed && props.onComplete) {
    if (props.validate) {
      if (
        props.values.every((val) =>
          new RegExp(validateToPattern(props.validate)).test(val)
        )
      ) {
        props.onComplete(props.values);
      }
    } else {
      props.onComplete(props.values);
    }
  }

  return (
    <PinInputContainer>
      {props.values.map((value, i) => (
        <PinInputField
          key={i}
          index={i}
          value={value}
          completed={completed}
          {...props}
        />
      ))}
    </PinInputContainer>
  );
};

PinInput.displayName = 'PinInput';
PinInput.propTypes = propTypes;
PinInput.defaultProps = {
  type: 'number',
  mask: false,
  showState: true,
};

export default PinInput;
