import Link from "next/link";
import { StyledNavbar, NextLink } from "./styles/Navbar.styled";

const pages = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  // { name: "Photography", href: "/photo" },
  // { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

const Navbar = () => {
  return (
    <StyledNavbar>
      {pages.map(({ name, href }) => (
        <NextLink key={href} href={href}>
          {name}
        </NextLink>
      ))}
    </StyledNavbar>
  );
};

export default Navbar;
