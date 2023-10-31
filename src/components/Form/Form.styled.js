import styled from 'styled-components';

export const Input = styled.input`
  display: flex;
  width: 300px;
  overflow: hidden;
  border: none;
  height: 40px;
  outline: none;
  padding: 5px 8px;
  margin-bottom: 40px;
  align-items: center;
  font-size: 16px;
`;
export const ContainerForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Container = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  display: flex;
  font-size: 22px;
  font-weight: 500;
  color: white;
  gap: 10px;
  align-items: baseline;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const SubmitBtn = styled.button`
  border: none;
  height: 50px;
  width: 50px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
  margin-bottom: 40px;
  padding: 10px;
`;
