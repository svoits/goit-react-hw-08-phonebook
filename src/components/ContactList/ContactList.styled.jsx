import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: white;
`;

export const Button = styled.button`
  padding: 5px 10px;
  min-width: 100px;
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;

  margin: 0;
  margin-left: auto;

  background-color: white;
  border: 2px black solid;
  border-radius: 5px;
  cursor: pointer;

  font-size: 16px;
  font-family: inherit;

  transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);

  &:hover,
  &:focus {
    color: white;
    background-color: black;
    border-color: white;
  }
`;

export const NoContacts = styled.p`
  color: white;
`;
