import styled from "styled-components";
import Image from "next/image";

export const StyledAvatar = styled(Image)`
  border-radius: 50%;
`;

export const AvatarContainer = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
`;

export const CenteredDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
