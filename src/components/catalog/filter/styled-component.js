/* eslint arrow-body-style: ["error", "as-needed"] */
import styled from 'styled-components';

export const FilterElement = styled.div`
  text-transform: uppercase;
  margin: 0 5rem 0 0;
  font-size: 2.4rem;
  font-family: ${props => props.theme.fonts.ariabold};
  margin: 0 0.3rem;
  cursor: pointer;
  margin-right: 2rem;
  transition: ${props => props.theme.colors.transition};
`;
export const FilterButton = styled.button`
  color: ${props => props.active
    ? props.theme.colors.blue
    : props.theme.colors.grey};
  font-size: 2.4rem;
  font-family: ${props => props.theme.fonts.ariabold};
  margin: 0 0.3rem;
  cursor: pointer;
  background-color: red;
  transition: ${props => props.theme.colors.transition};
  text-transform: uppercase;

  &:hover {
    transition: ${props => props.theme.colors.transition};
    color: ${props => props.theme.colors.blue};
  }
`;
