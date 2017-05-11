import { css } from 'styled-components';
import s from './config';

/**
 * @method media
 * @param {object} opt - option for styled
 * @param {object} s.media - option for config with media query
 * @param {string} point - media query breakpoint
 * @param {string} prefix - min | max prefix size
 * @return {object} css property
 */
export const media = Object.keys(s.media).reduce((opt, point) => {
  const query = s.media[point];
  const cssBody = opt;
  // eslint-disable-next-line arrow-body-style
  cssBody[point] = prefix => (...args) => {
    // if (!prefix || ['min', 'max'].indexOf(prefix) < 0) {
    if (!prefix || !['min', 'max'].includes(prefix)) {
      // eslint-disable-next-line no-console
      console.warn('The prefix value must be `min` or `max`');
    }
    return css`
      @media (${prefix}-width: ${query}) {
        ${css(...args)}
      }
    `;
  };
  return cssBody;
}, {});
