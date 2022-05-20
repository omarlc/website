import Link from "next/link";
import { StyledNavbar, NavbarLink } from "./styles/Navbar.styled";

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavbarLink href="/">
        <a>Home</a>
      </NavbarLink>
      <NavbarLink href="/projects">
        <a>Projects</a>
      </NavbarLink>
      <NavbarLink href="/photo">
        <a>Photography</a>
      </NavbarLink>
      <NavbarLink href="/blog">
        <a>Blog</a>
      </NavbarLink>
      <NavbarLink href="/about">
        <a>About</a>
      </NavbarLink>
    </StyledNavbar>
  );
};

export default Navbar;
