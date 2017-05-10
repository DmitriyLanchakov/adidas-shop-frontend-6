/* eslint arrow-body-style: ["error", "as-needed"] */
import styled from 'styled-components';

function checkWidth(size, media) {
  if (media !== undefined && media === 'xs' && !size) {
    console.warn('Не задан `col.xs`');
  }

  const percent = `${100 / (12 / size)}%`;

  return {
    'flex-basis': percent,
    'max-width': percent,
  };
}

const Col = styled.div`
  ${props => checkWidth(props.xs, 'xs')}

  @media (min-width: ${props => props.theme.media.sm}) {
    ${props => checkWidth(props.sm)}
  }

  @media (min-width: ${props => props.theme.media.lg}) {
    ${props => checkWidth(props.lg)}
  }
`;

export default Col;
