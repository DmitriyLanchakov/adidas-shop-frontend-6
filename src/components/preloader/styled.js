/* eslint arrow-body-style: ["error", "as-needed"] */
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  height: 100%;
  width: calc(100% - 39.5rem);
  left: 39.5rem;
  top: 0;
  background-color: rgba(255, 255, 255, 0.58);
  z-index: 2;
`;

const spinerRotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  left: calc(50% - 4.5rem);
  height: 9rem;
  width: 9rem;
  margin-top: 30%;
  position: relative;
  animation: ${spinerRotate} 1900ms linear infinite;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 3px solid rgba(204,204,204,0);
    border-left-color: ${props => props.theme.colors.blue};
    border-radius: 100%;
  }
  &::before {
    content: "";
    margin: -4.3rem 0 0 -4.3rem;
    height: 8rem;
    width: 8rem;
    animation: ${spinerRotate} 1900ms linear infinite;
  }
  &::after {
    content: "";
    margin: -5.4rem 0 0 -5.4rem;
    height: 10rem;
    width: 10rem;
    animation: ${spinerRotate} 3800ms linear infinite;
  }
`;
