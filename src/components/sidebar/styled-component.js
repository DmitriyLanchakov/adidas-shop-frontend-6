/* eslint arrow-body-style: ["error", "as-needed"] */
import styled from 'styled-components';
import { media } from '../../styled-components/helpers';

export const LogoLayout = styled.div`
  margin: 3.1rem auto;
  text-align: center;
  ${media.sm('max')`
    display: inline-block;
    margin: 1rem 2rem;
    text-align: left;
    float: left;
  `}
`;

export const MenuToggle = styled.button`
  padding: 1.5rem 1.5rem;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  .box {
    width: 5rem;
    height: 2.4rem;
    display: inline-block;
    position: relative;
    .inner {
      display: block;
      top: 50%;
      margin-top: -2px;
      transition-duration: 0.22s;
      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      &,
      &::before,
      &::after {
        width: 5rem;
        height: 0.4rem;
        background-color: #fff;
        position: absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;
      }
      &::before,
      &::after {
        content: "";
        display: block;
      }
      &::before {
        top: -1.3rem;
        transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
      }
      &::after {
        bottom: -1.3rem;
        transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
    }
  }

  &.is-active {
    .inner {
      transform: rotate(225deg);
      transition-delay: 0.12s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      &::before {
        top: 0;
        opacity: 0;
        transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
      }
      &::after {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }
  }
`;

export const MobileTogglerNav = styled.div`
  ${media.sm('min')`display: none;`}
  ${media.sm('max')`
    display: inline-block;
    position: relative;
    float: right;
    margin: 3rem;
    button {
      box-shadow: none;
      border: 0;
      padding: 0;
      width: 3rem;
      height: 2rem;
      cursor: pointer;
      position: relative;
      background: transparent;
    }
  `}
`;

export const NavbarLayout = styled.div`
  ${media.sm('max')`
    max-width: 41.4rem;
    margin: auto;
    clear: both;
    padding: 0 2rem;
  `}
`;

export const SearchLayout = styled.div`
  padding: 0 2rem;
  form {
    position: relative;
  }
`;
