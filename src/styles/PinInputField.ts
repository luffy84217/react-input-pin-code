import styled from 'styled-components';

export const Input = styled.input<{ completed: boolean; showState: boolean }>`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.5rem;
  outline: transparent solid 2px;
  outline-offset: 2px;
  font-size: 1rem;
  text-align: center;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  border-color: #cccccc;
  background-color: inherit;
  &:focus {
    border-color: #0d6efd;
    box-shadow: #0d6efd 0px 0px 0px 1px;
  }
  &:last-child {
    margin-right: 0;
  }
  ${({ completed, showState }) =>
    completed && showState
      ? `&:valid {
    border-color: rgb(25, 135, 84);
    box-shadow: rgb(25, 135, 84) 0px 0px 0px 1px;
    background-color: rgba(25, 135, 84, 0.1);
  }`
      : ''}
  ${({ showState }) =>
    showState
      ? `&:invalid {
    border-color: rgb(220, 53, 69);
    box-shadow: rgb(220, 53, 69) 0px 0px 0px 1px;
    background-color: rgba(220, 53, 69, 0.1);
  }`
      : ''}
`;
