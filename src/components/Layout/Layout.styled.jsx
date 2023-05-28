import styled from 'styled-components';

const LayoutContainer = styled.div`
  padding: 20px;
`;

const NavList = styled.ul`
  display: flex;
  background-color: #c4f6f6;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-bottom: 10px;
  margin-right: 10px;
  text-decoration: none;
`;

const LoadingMessage = styled.div`
  font-size: 18px;
  text-align: center;
`;

export { LayoutContainer, NavList, NavItem, LoadingMessage };
