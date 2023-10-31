import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  padding: 0;
  list-style: none;
  margin: 0;
`;

export const ListItem = styled.li`
  position: relative;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: all 250ms ease;

  &:hover,
  &:focus {
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.6);
    transform: scale(1.03);
  }
`;

export const Title = styled.p`
  padding: 16px;
  font-size: 20px;
  color: white;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 250ms ease;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  width: 100%;
  box-sizing: border-box;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: transform 0.2s ease-in-out;

  ${ListItem}:hover & {
    transform: scale(1.03);
  }
`;

export const Link = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`;

export const Section = styled.section`
  text-align: center;
`;
