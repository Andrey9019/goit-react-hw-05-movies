import styled from 'styled-components';

export const GoBackBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  text-decoration: none;
  color: white;
  background-color: #555;
  font-size: 24px;
  transition: all 250ms ease;
  border: none;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-top: 5px;

  &:hover {
    color: #ff5733;
    background-color: transparent;
    transform: scale(1);
    background-color: #444;
  }
`;
