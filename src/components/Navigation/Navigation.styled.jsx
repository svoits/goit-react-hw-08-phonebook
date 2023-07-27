import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;

  transition: transform 350ms cubic-bezier(0.65, 0.05, 0.36, 1),
    color 350ms cubic-bezier(0.65, 0.05, 0.36, 1);

  &.active {
    color: white;
  }

  &:hover,
  &:focus {
    color: white;
    transform: scale(1.05);
  }
`;
