import { css } from '@emotion/core';

export const styWrapper = css`
  .sub-title {
    color: #f6c578cc;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
  }

  @media screen and (max-width: 500px) {
    .sub-title {
      font-size: 18px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
    }
  }
  
  @keyframes mymove {
    from {left: 0px;}
    to {left: 200px;}
  }

  .fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
    animation-duration: 5s;
  }

  .animated-fast {
      -webkit-animation-duration: .5s;
      animation-duration: .5s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
  }
`;
