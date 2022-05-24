import styled from "styled-components";
import Image from "next/image";

export const StyledAvatar = styled(Image)`
  border-radius: 50%;
`;

export const AvatarContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 300px) and (max-width: 635px) {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ease all 2s;
  }
`;
