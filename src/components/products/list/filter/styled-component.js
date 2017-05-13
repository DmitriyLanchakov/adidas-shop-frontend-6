/* eslint arrow-body-style: ["error", "as-needed"] */
import styled from 'styled-components';
import iconFromFilter from '../../../../assets/img/filter.png';
import { media } from '../../../../styled-components/helpers';

export const FilterLayout = styled.form`
  margin: 1rem 0 1rem 0.9rem;
`;
export const Name = styled.span`
  margin-right: 1rem;
  color: ${props => props.theme.colors.blue};
`;

export const Elements = styled.div`
  text-transform: uppercase;
  font-size: 2.4rem;
  font-family: ${props => props.theme.fonts.ariabold};
  margin: 0 1.8rem;
  cursor: pointer;
  transition: ${props => props.theme.transition};
`;

export const Button = styled.button`
  color: ${props => (props.active
    ? props.theme.colors.blue
    : props.theme.colors.grey)};
  font-size: 2.4rem;
  font-family: ${props => props.theme.fonts.ariabold};
  margin: 0.5rem 0.4rem 0;
  cursor: pointer;
  background-color: red;
  transition: ${props => props.theme.transition};
  text-transform: uppercase;
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 1.1rem 0;

  &:hover {
    transition: ${props => props.theme.transition};
    color: ${props => props.theme.colors.blue};
  }
`;

export const FilterIcon = styled.span`
  background: url(${iconFromFilter}) center center no-repeat;
  background-size: cover;
  width: 4rem;
  height: 3.3rem;
  display: inline-block;
`;

export const ToggleFilter = styled.button`
  padding: 1.1rem 0.8rem 0.5rem;
  margin-right: 0;
  background: transparent;
  border: 0;
  background-color: #ebebeb;

  ${media.sm('max')`display: none;`}
`;
