import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;

  &.active {
    color: white;
  }
`;
