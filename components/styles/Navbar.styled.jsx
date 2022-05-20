import styled from "styled-components";
import Link from "next/link";

const StyledNavbarLink = ({ as, href, children, className }) => {
  return (
    <Link href={href} as={as} passHref>
      <a className={className}>{children}</a>
    </Link>
  );
};

export const NavbarLink = styled(StyledNavbarLink)`
  color: white;
  padding: 8px 10px;
  border-radius: 25px;
  text-decoration: none;

  &:hover {
    background-color: #333339;
    transition: 0.25s ease-in-out;
  }
`;

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
`;
