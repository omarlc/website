import styled, { css } from "styled-components";
// TODO: Change colors for theme variables.
export const StyledPresence = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  border: 6px solid #121213;

  ${({ status }) => {
    switch (status) {
      case "online":
        return css`
          background-color: #3ba55d;
        `;
      case "idle":
        return css`
          background-color: #121213;
          box-shadow: inset -20px -20px 0 0 #faa81a;
        `;
      case "dnd":
        return css`
          background-color: #ed4245;
          &::before {
            position: absolute;
            background-color: #121213;
            width: 50px;
            height: 14px;
            content: "";
            left: 5px;
            top: 22px;
            border-radius: 25px;
          }
        `;
      case "offline":
        return css`
          display: inline-block;
          box-sizing: border-box;
          border: 0.6em solid #747f8c;
          position: relative;
        `;
    }
  }};
`;
