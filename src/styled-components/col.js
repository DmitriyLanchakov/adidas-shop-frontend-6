/* eslint arrow-body-style: ["error", "as-needed"] */
import styled from 'styled-components';

/**
 * @method checkWidth
 * @param  {number}   size  window size
 * @param {string}  media  prefix [notRequired]
 * @return {object} css values
 */
function checkWidth(size, media) {
  let $size = size;

  if (media !== undefined && media === 'xs' && !size) {
    console.warn('The `xs` is not specified for the <Col /> component');
    $size = 12;
  }

  const percent = `${100 / (12 / $size)}%`;

  return {
    'flex-basis': percent,
    'max-width': percent,
  };
}

const Col = styled.div`
  ${props => checkWidth(props.xs, 'xs')}

  @media (min-width: ${props => props.theme.media.sm}) {
    ${props => props.sm && checkWidth(props.sm)}
  }

  @media (min-width: ${props => props.theme.media.md}) {
    ${props => props.md && checkWidth(props.md)}
  }

  @media (min-width: ${props => props.theme.media.lg}) {
    ${props => props.lg && checkWidth(props.lg)}
  }

  @media ${props => `
    (${props.altMin && `min-width: ${props.altMin}`})
    and
    (${props.altMax && `max-width: ${props.altMax}`})
  `} {
    ${props => props.altCol && checkWidth(props.altCol)}
  }
`;

export default Col;
