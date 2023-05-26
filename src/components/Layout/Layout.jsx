import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: #2121;

  &.active {
    color: orange;
  }
`;

const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
