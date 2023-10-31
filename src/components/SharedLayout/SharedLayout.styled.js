import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  > nav {
  }
`;
export const Section = styled.section`
  background-color: grey;
  padding: 20px;
`;
export const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 26px;
  transition: color 0.3s;

  display: inline;
  margin-right: 50px;
  &:hover {
    color: #ff5733;
  }

  &.active {
    &:hover {
      color: #ff5733;
    }
  }
`;
