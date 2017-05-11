import { css } from 'styled-components';
import s from './config';

/**
 * @namespace
 * @param {object} opt - option for styled
 * @param {object} s.media - option for config with media query
 * @param {string} point - media query breakpoint
 * @param {string} prefix - min | max prefix size
 */

export const media = Object.keys(s.media).reduce((opt, point) => {
  const query = s.media[point];
  const cssBody = opt;
  // eslint-disable-next-line
  cssBody[point] = prefix => (...args) => css`
    @media (${prefix}-width: ${query}) {
      ${css(...args)}
    }
  `;
  return cssBody;
}, {});
