import styled from "styled-components";
import Link from "next/link";

const NavLink = styled.a`
  color: white;
  padding: 8px 10px;
  border-radius: 25px;
  text-decoration: none;

  &:hover {
    background-color: #333339;
    transition: 0.25s ease-in-out;
  }
`;

export const NextLink = ({ href, as, children }) => (
  <Link href={href} passHref as={as}>
    <NavLink>{children}</NavLink>
  </Link>
);

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
`;
