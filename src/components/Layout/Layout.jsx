import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';
import {
  LayoutContainer,
  NavList,
  NavItem,
  LoadingMessage,
} from './Layout.styled';

const StyledLink = styled(NavLink)`
  color: #2121;

  &.active {
    color: orange;
  }
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <NavList>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/movies">Movies</StyledLink>
        </NavItem>
      </NavList>
      <Suspense fallback={<LoadingMessage>Loading...</LoadingMessage>}>
        <Outlet />
      </Suspense>
    </LayoutContainer>
  );
};

export default Layout;
