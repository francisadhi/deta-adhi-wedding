import { css, keyframes } from '@emotion/core';
import Background from '@assets/images/adhi-deta1.jpg';
import BackgroundWave from '@assets/images/wave.svg';


export const styHero = css`
  width: 100%;
  height: 100vh;
  .ocean { 
    height: -35%;
    width:100%;
    position:absolute;
    bottom:0;
    left:0;
    background: #F9EBC8;
  }
  
  .wave {
    background: url(${BackgroundWave}) repeat-x;
    position: absolute;
    top: -88px;
    width: 6400px;
    height: 100px;
    animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
  }
  
  .wave:nth-of-type(2) {
    top: -70px;
    animation: wave 4s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
    opacity: 1;
  }
  
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
  
  @keyframes swell {
    0%, 100% {
      transform: translate3d(0,-25px,0);
    }
    50% {
      transform: translate3d(0,5px,0);
    }
  }
`;

const radarAnimation = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  60% {
    box-shadow: 0 0 0 30px rgba(255,255,255,.1);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const upAndDownAnimation = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-5px); }
`;

export const styScrollWrapper = css`
  #scroll {
    display: flex;
    justify-content: center;
    cursor: pointer;

    span {
      position: absolute;
      bottom: 46px;
      text-align: center;
      color: #fff;
    }

    .text {
      animation: ${upAndDownAnimation} 1s infinite alternate;
    }

    @media screen and (max-width: 414px) {
      .text {
        bottom: 80px;
        font-size: 12px;
      }
    }

    @media screen and (max-width: 360px) {
      .text {
        bottom: 60px;
        font-size: 12px;
      }
    }
  }

  .scroll__icon {
    .button {
      position: absolute;
      bottom: 46px;
      left: 50%;
      z-index: 2;
      display: inline-block;
      transform: translate(0, -50%);
      color: #fff;
      letter-spacing: 0.1em;
      text-decoration: none;
      transition: opacity 0.3s;

      span::before {
        position: absolute;
        top: -23px;
        left: -22px;
        z-index: -1;
        content: '';
        width: 44px;
        height: 44px;
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
        border-radius: 100%;
        opacity: 0;
        animation: ${radarAnimation} 3s infinite;
        box-sizing: border-box;
      }

      span::after {
        position: absolute;
        top: 50%;
        left: 50%;
        content: '';
        width: 16px;
        height: 16px;
        margin: -12px 0 0 -8px;
        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;
        transform: rotate(-45deg);
        box-sizing: border-box;
      }
    }

    &button:hover {
      opacity: 0.5;
    }

    @media screen and (max-width: 414px) {
      .button {
        bottom: 80px;
      }
    }

    @media screen and (max-width: 360px) {
      .button {
        bottom: 65px;
      }
    }
  }
`;

export const styBackground = css`
  background-size: cover;
  background-image: url(${Background});
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 400px) {
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

    .sub-title {
      font-size: 28px;
    }
  }
`;

export const styWrapper = css`
  color: #fff;
  margin-top: -8em;

  img {
    max-width: 80px;
    margin-bottom: 24px;
  }

  h1 {
    margin-bottom: 0px;
    font-size: 100px;
    line-height: 1.5;
    font-family: 'Arizonia', Sans-serif!important;
    color: #fff;
  }

  h2 {
    color: #fff;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  h4 {
    font-family: "Dancing Script", Sans-serif;
    margin: 0;
    color: #fff;
    font-size: 30px;
  }

  .getting-married {
    margin-top: -12px;
  }

  .to-dearest {
    font-size: 16px;
    color: #f1f1f1b3;
    margin-bottom: 8px;
  }

  .to-dearest-name {
    border-bottom: 1px solid;
    padding-bottom: 12px;
    max-width: 250px;
    margin: auto auto 30px auto;
  }

  .margin__bottom {
    margin-bottom: 3em !important;
  }

  a {
    color: #f14e95;
  }

  @media screen and (max-width: 330px) {
    img {
      max-width: 40px;
      margin-top: 24px;
      margin-bottom: 8px;
    }

    .to-dearest {
      margin-bottom: 8px;
      font-size: 16px;
    }

    .to-dearest-name {
      margin: auto auto 16px auto;
    }
  }
`;

export const styWrapperCount = css`
  display: inline-block;
  width: 80px;
  height: 80px;
  background: #f6c578cc;
  margin: 8px;
  border-radius: 50%;
  position: relative;
  animation: pulse 1s ease infinite;
  color: #fff;

  h3 {
    font-size: 24px;
    color: #fff;
    margin: 10px 0 0 0;
  }

  @media screen and (max-width: 500px) {
    width: 45px;
    height: 45px;
    margin: 4px;
    font-size: 8px;

    h3 {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 380px) {
    width: 55px;
    height: 55px;

    h3 {
      margin-top: 12px;
      margin-bottom: -4px;
      font-size: 16px;
    }

    span {
      font-size: 10px;
    }
  }
`;

export const styMargin = (px) => css`
  margin: ${px};
`;

export const styButtonWrapper = css`
  display: flex;
  justify-content: center;

  .btn {
    background: #f14e95;
    color: #fff;
    border: none;
  }
`;
