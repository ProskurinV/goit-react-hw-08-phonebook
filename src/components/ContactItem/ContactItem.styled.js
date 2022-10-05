import styled from 'styled-components';

export const Item = styled.li`
  font-size: large;
  font-weight: 500;
`;

export const CloseBtn = styled.button`
  margin-left: 5px;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  background-color: #fff;

  &:hover,
  &:focus {
    background-color: #05c3dd;
  }
`;
