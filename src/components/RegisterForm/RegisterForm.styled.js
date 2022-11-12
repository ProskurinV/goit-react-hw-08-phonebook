import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormBook = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  align-items: center;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: large;
  font-weight: 500;
`;

export const Input = styled(Field)`
  margin-top: 10px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  outline: none;
  height: 30px;
`;

export const Btn = styled.button`
  /* display: flex; */

  margin-top: 10px;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  background-color: #fff;

  &:hover,
  &:focus {
    background-color: #05c3dd;
  }
`;

export const Error = styled(ErrorMessage)`
  color: red;
  margin-top: 5px;
`;
