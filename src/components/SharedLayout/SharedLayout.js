import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { Link, Header, List, Nav, Section } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Section>
      <Header>
        <Nav>
          <List>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </List>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Section>
  );
};

export default SharedLayout;
