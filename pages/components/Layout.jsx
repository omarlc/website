import styled from "styled-components";
const StyledLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children }) => {
  return (
    <>
      <StyledLayout>{children}</StyledLayout>
    </>
  );
};

export default Layout;
