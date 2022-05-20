import styled from "styled-components";

export const ListItem = styled.li`
  padding: 8px;
  font-size: 1.5rem;
  color: white;

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    padding-right: 0;
  }
`;

export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;
