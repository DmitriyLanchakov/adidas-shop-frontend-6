import { injectGlobal } from 'styled-components';
import s from './config';
import avenirBold from '../assets/fonts/avenir-next-bold.woff';
import avenirRegular from '../assets/fonts/avenir-next-regular.woff';
import andaleMono from '../assets/fonts/Andale-Mono.woff';

export default injectGlobal`
  @font-face {
    font-family: ${s.fonts.ariabold};
    src: url('${avenirBold}');
    font-style: normal;
  }

  @font-face {
    font-family: ${s.fonts.andale};
    src: url('${andaleMono}');
    font-style: normal;
  }

  @font-face {
    font-family: ${s.fonts.avenir};
    src: url('${avenirRegular}');
    font-style: normal;
  }

  html, body {
    height: 100%;
    font-family: ${s.fonts.avenir};
  }
  html { font-size: 62.5%; }


  aside, section {
    button, a, input { outline-style: none; }
    a { text-decoration: none; }
  }
  section {
    flex-basis: 100%;
    @media (max-width: ${s.media.sm}) {
      margin-top: 9rem;
    }
  }

  aside {
    min-height: 100vh;
    background-color: #0e0e0e;
    flex-basis: 41.4rem;
    @media (max-width: ${s.media.sm}) {
      min-height: auto;
      position: fixed;
      padding: 0;
      left: 0;
      width: 100%;
      z-index: 1;
    }
  }
`;
