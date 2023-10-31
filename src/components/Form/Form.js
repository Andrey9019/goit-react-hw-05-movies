import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import {
  Container,
  ContainerForm,
  Label,
  SubmitBtn,
  InputContainer,
  Input,
} from './Form.styled';

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();
    const inputValue = value.toLowerCase();
    onSubmit(inputValue);
    if (!inputValue.trim()) {
      toast.error('Please enter something!');
      return;
    }
  };

  return (
    <Container>
      <ContainerForm onSubmit={onFormSubmit}>
        <InputContainer>
          <Label>
            Search by movie
            <Input
              type="text"
              name="query"
              value={value}
              autoFocus
              onChange={event => setValue(event.target.value)}
              placeholder="Enter movie"
            />
          </Label>
          <SubmitBtn type="submit">
            <HiMiniMagnifyingGlass
              style={{
                width: '20px',
                height: '20px',
              }}
            />
          </SubmitBtn>
        </InputContainer>
      </ContainerForm>
      <ToastContainer autoClose={4000} theme="colored" />
    </Container>
  );
};

export default Form;
