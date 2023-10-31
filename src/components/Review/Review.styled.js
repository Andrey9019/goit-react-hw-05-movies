import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const Author = styled.h3`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  color: white;
  font-size: 16px;
`;
export const Item = styled.li`
  margin: 10px 0;
  padding: 10px;
  background-color: #444;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;
