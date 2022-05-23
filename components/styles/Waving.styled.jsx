import styled from "styled-components";
import { keyframes } from "styled-components";

const animation = keyframes`
 	0% {
		transform: rotate(0deg);
	}
	10% {
		transform: rotate(14deg);
	}
	20% {
		transform: rotate(-8deg);
	}
	30% {
		transform: rotate(14deg);
	}
	40% {
		transform: rotate(-4deg);
	}
	50% {
		transform: rotate(10deg);
	}
	60% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(0deg);
	}
`;

const WaveSpan = styled.span`
  &:hover {
    animation: ${animation};
    animation-duration: 2.5s;
    animation-iteration-count: 1;
    transform-origin: 70% 70%;
    display: inline-block;
  }
`;

const Waving = () => {
  return <WaveSpan>👋</WaveSpan>;
};

export default Waving;
