import styled from 'styled-components';
import { pinInputDefaultProps } from '../constants';
import { colorParser } from '../utils';

export const Input = styled.input<{
  $completed: boolean;
  $showState: boolean;
  $sizing: 'xs' | 'sm' | 'md' | 'lg';
  $borderColor: string;
  $errorBorderColor: string;
  $focusBorderColor: string;
  $validBorderColor: string;
}>`
  width: ${({ $sizing }) => {
    switch ($sizing) {
      case 'xs':
        return '1.5rem';
      case 'sm':
        return '2rem';
      case 'md':
        return '2.5rem';
      case 'lg':
        return '3rem';
    }
  }};
  height: ${({ $sizing }) => {
    switch ($sizing) {
      case 'xs':
        return '1.5rem';
      case 'sm':
        return '2rem';
      case 'md':
        return '2.5rem';
      case 'lg':
        return '3rem';
    }
  }};
  margin-right: 0.375rem;
  outline: transparent solid 2px;
  outline-offset: 2px;
  font-size: ${({ $sizing }) => {
    switch ($sizing) {
      case 'xs':
        return '0.75rem';
      case 'sm':
        return '0.875rem';
      case 'md':
        return '1rem';
      case 'lg':
        return '1.125rem';
    }
  }};
  text-align: center;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ $borderColor }) => {
    const rgb = colorParser($borderColor);

    return rgb
      ? `rgb(${rgb.r},${rgb.g},${rgb.b})`
      : pinInputDefaultProps.borderColor;
  }};
  background-color: inherit;
  box-sizing: border-box;
  &:focus {
    border-color: ${({ $focusBorderColor }) => {
      const rgb = colorParser($focusBorderColor);

      return rgb
        ? `rgb(${rgb.r},${rgb.g},${rgb.b})`
        : pinInputDefaultProps.focusBorderColor;
    }};
    box-shadow: ${({ $focusBorderColor }) => $focusBorderColor} 0px 0px 0px 1px;
  }
  &:last-child {
    margin-right: 0;
  }
  ${({ $completed, $showState, $validBorderColor }) => {
    const rgb = colorParser($validBorderColor);

    return $completed && $showState
      ? `&:valid {
    border-color: ${
      rgb
        ? `rgb(${rgb.r},${rgb.g},${rgb.b})`
        : pinInputDefaultProps.validBorderColor
    };
    box-shadow: ${
      rgb
        ? `rgb(${rgb.r},${rgb.g},${rgb.b})`
        : pinInputDefaultProps.validBorderColor
    } 0px 0px 0px 1px;
    background-color: ${
      rgb
        ? `rgba(${rgb.r},${rgb.g},${rgb.b},0.1)`
        : pinInputDefaultProps.validBorderColor
            .replace('rgb', 'rgba')
            .replace(')', ',0.1)')
    };
  }`
      : '';
  }}
  ${({ $showState, $errorBorderColor }) => {
    const rgb = colorParser($errorBorderColor);

    return $showState
      ? `&:invalid {
    border-color: ${
      rgb
        ? `rgb(${rgb.r},${rgb.g},${rgb.b})`
        : pinInputDefaultProps.errorBorderColor
    };
    box-shadow: ${
      rgb
        ? `rgb(${rgb.r},${rgb.g},${rgb.b})`
        : pinInputDefaultProps.errorBorderColor
    } 0px 0px 0px 1px;
    background-color: ${
      rgb
        ? `rgba(${rgb.r},${rgb.g},${rgb.b},0.1)`
        : pinInputDefaultProps.errorBorderColor
            .replace('rgb', 'rgba')
            .replace(')', ',0.1)')
    };
  }`
      : '';
  }}
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
