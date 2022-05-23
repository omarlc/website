import styled, { css } from "styled-components";

export const StyledPresence = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: inline-block;
  margin-left: 20px;
  ${({ status }) => {
    switch (status) {
      case "online":
        return css`
          background-color: #3ba55d;
        `;
      case "idle":
        return css`
          box-shadow: inset -15px -15px 0 0 #faa81a;
        `;
      case "dnd":
        return css`
          position: relative;
          background-color: #ed4245;
          &::before {
            position: absolute;
            background-color: #121213;
            width: 40px;
            height: 15px;
            content: "";
            left: 5px;
            top: 18px;
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
