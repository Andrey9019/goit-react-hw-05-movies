import styled from 'styled-components';

export const Card = styled.div`
  padding: 20px;
  margin: 0 auto;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 1000px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 1px solid white;
  border-radius: 8px;
  padding: 40px 15px;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;
  box-shadow: 0px 0px 4px black;
  padding: 15px;
  width: 150px;
  height: 265px;

  background-color: #444;
  border-radius: 5px;
  color: #fff;
`;

export const Title = styled.h3`
  color: white;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

export const CharacterInfo = styled.p`
  color: #ccc;
  text-align: center;
`;
