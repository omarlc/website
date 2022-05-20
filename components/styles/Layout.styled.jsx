import styled from "styled-components";
import Navbar from "../Navbar";
import { Container } from "./Container.styled";

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 3);
`;

const Layout = ({ children }) => (
  <Container>
    <StyledLayout>
      <Navbar />
      {children}
    </StyledLayout>
  </Container>
);

export default Layout;
