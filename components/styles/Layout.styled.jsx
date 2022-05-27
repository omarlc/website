import styled from "styled-components";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Container } from "./Container.styled";
import { Main } from "./Main.styled";

const StyledLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
`;

const Layout = ({ children }) => (
  <Container>
    <StyledLayout>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </StyledLayout>
  </Container>
);

export default Layout;
