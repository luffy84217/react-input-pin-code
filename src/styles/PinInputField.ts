import styled from 'styled-components';

export const Input = styled.input`
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
`;
