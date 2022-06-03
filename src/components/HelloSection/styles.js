import { css } from '@emotion/core';
import Background from '@assets/images/bg.jpg';

export const styWrapperCouple = css`

  background-size: cover;
  background-image: url(${Background});
  margin-top: 0px;
  background-position: center;
  width: 100%;
  height: auto;
  display: flex;
  flex: 100%;
  justify-content: center;
  align-items: center;

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

  .couple-font{    
    font-family: 'Arizonia', Sans-serif!important;
    font-size: 26px;
    color: #9F6607;
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

export const styBackground = css`
  background-size: cover;
  background-image: url(${Background});
  margin-top: 0px;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 400px) {
    
    background-size: cover;
    background-image: url(${Background});
    background-position: center;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
      font-size: 40px;
    }

    .sub-title {
      font-size: 28px;
    }
  }

  @media screen and (max-width: 500px) {
    .title {
      font-size: 54px;
    }

    
    background-size: cover;
    background-image: url(${Background});
    background-position: center;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .sub-title {
      font-size: 28px;
    }
  }
`;