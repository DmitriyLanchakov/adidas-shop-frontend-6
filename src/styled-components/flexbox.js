/* eslint arrow-body-style: ["error", "as-needed"] */
import styled from 'styled-components';

const Flexbox = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  align-content: center;

  ${props => props.flow && `flex-flow: ${props.flow};`}

  ${props => props.justify && `justify-content: ${props.justify};`};
  ${props => props.align && `vertical-align: ${props.align};`};

  ${props => props.stretch && 'align-items: stretch; align-content: stretch;'};

`;

export default Flexbox;
