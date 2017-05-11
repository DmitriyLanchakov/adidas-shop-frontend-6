/* eslint arrow-body-style: ["error", "as-needed"] */
import styled from 'styled-components';

export const Hr = styled.hr`
  height: .3rem;
  opacity: .56;
  border: 0;
  width: 100%;
  margin-bottom: 1rem;
  background-color: ${props => props.theme.colors.light_grey};
`;
