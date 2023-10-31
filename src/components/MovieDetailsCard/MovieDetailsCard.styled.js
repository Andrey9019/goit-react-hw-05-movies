import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  border: 1px solid black;
  border-radius: 4px;
  gap: 20px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 400px;
  height: auto;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  align-items: center;
`;

export const Description = styled.h3`
  color: #555333;
  font-size: 25px;
`;

export const Info = styled.p`
  color: white;
  font-size: 18px;
`;

export const AdditionalInfo = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const InfoList = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-bottom: 50px;
`;

export const NewLink = styled(Link)`
  font-size: 30px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 30px;
  color: white;
  cursor: pointer;
  transition: all 250ms ease;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    color: #ff5733;
    border: 1px solid #ff5733;
  }
`;
