import { css, keyframes } from '@emotion/core';
import Background from '@assets/images/karangpramukaa-2.jpg';
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
    letter-spacing: 1px;

    span {
      position: absolute;
      bottom: 46px;
      text-align: center;
      color: #fff;
    }

    .text {
      animation: ${upAndDownAnimation} 1s infinite alternate;
      font-weight: bold;
      letter-spacing: 1px;
    }

    @media screen and (max-width: 414px) {
      .text {
        bottom: 80px;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 1px;
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
        animation: ${radarAnimation} 2s infinite;
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
    text-shadow: rgb(4 28 50) 1px 1px 2px;
  }

  h2 {
    color: #fff;
    font-size: 22px;
    font-weight: 600;
    //line-height: 1.5;
    //margin-bottom: 30px;
    margin: 20px 0 0px 0;
  }

  h4 {
    font-family: "Dancing Script", Sans-serif;
    margin: 0;
    color: #fff;
    font-size: 30px;
    text-shadow: rgb(4 28 50) 1px 1px 2px;
  }

  .getting-married {
    margin-top: -12px;
  }

  .to-dearest {
    font-size: 16px;
    color: #fffcfcb3;
    margin-bottom: 8px;
    text-shadow: rgb(4 28 50) 1px 1px 2px;
  }

  .to-dearest-name {
    border-bottom: 1px solid;
    padding-bottom: 12px;
    max-width: 250px;
    margin: auto auto 30px auto;
    text-shadow: rgb(4 28 50) 1px 1px 2px;
  }

  .margin__bottom {
    margin-bottom: 3em !important;
  }

  .circle-container {
    $particleNum: 200;
    $particleColor: hsl(180, 100%, 80%);
  
    position: absolute;
    transform: translateY(-10vh);
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  
    .circle {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      mix-blend-mode: screen;
      background-image: radial-gradient(
        hsl(180, 100%, 80%),
        hsl(180, 100%, 80%) 10%,
        hsla(180, 100%, 80%, 0) 56%
      );
  
      animation: fadein-frames 200ms infinite, scale-frames 2s infinite;
  
      @keyframes fade-frames {
        0% {
          opacity: 1;
        }
  
        50% {
          opacity: 0.7;
        }
  
        100% {
          opacity: 1;
        }
      }
  
      @keyframes scale-frames {
        0% {
          transform: scale3d(0.4, 0.4, 1);
        }
  
        50% {
          transform: scale3d(2.2, 2.2, 1);
        }
  
        100% {
          transform: scale3d(0.4, 0.4, 1);
        }
      }
    }
  
    $particleBaseSize: 8;
  
    
    @for $i from 1 through $particleNum {
      &:nth-child(#{$i}) {
        $circleSize: random($particleBaseSize);
        width: $circleSize + px;
        height: $circleSize + px;
  
        $startPositionY: random(10) + 100;
        $framesName: "move-frames-" + $i;
        $moveDuration: 28000 + random(9000) + ms;
  
        animation-name: #{$framesName};
        animation-duration: $moveDuration;
        animation-delay: random(37000) + ms;
  
        @keyframes #{$framesName} {
          from {
            transform: translate3d(
              #{random(100) + vw},
              #{$startPositionY + vh},
              0
            );
          }
  
          to {
            transform: translate3d(
              #{random(100) + vw},
              #{- $startPositionY - random(30) + vh},
              0
            );
          }
        }
  
        .circle {
          animation-delay: random(4000) + ms;
        }
      }
    }
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
  background-color: transparent;
  position: relative;
  animation: pulse 1s ease infinite;
  color: #fff;
  box-shadow: 2px 2px 2px #FCFFE7;
  background: radial-gradient(circle at 50%,at 120%,#81e8f6,#76deef 0,#055194 80%,#062745 100%);
  background: radial-gradient(circle at 20% 100%,#FFEE63,#73777B 10%,#f6c578cc 80%,#73777B 100%);

  h3 {
    margin-top: 10px;
    font-size: 11px;
    color: #fff;
    padding 0 0 0 0;
    margin-top: 0px;
    text-shadow: rgb(4 28 50) 1px 1px 2px;
  }

  @media screen and (max-width: 500px) {
    width: 45px;
    height: 45px;
    margin: 4px;
    font-size: 8px;
    
    h3 {
      margin-top: 10px;
      margin-bottom: -4px;
      font-size: 9px;
      text-shadow: rgb(4 28 50) 1px 1px 2px;
    }

    h2 {
      margin-top: 12px;
      margin-bottom: -4px;
      font-size: 11px;
    }
  }

  @media screen and (max-width: 380px) {
    width: 55px;
    height: 55px;

    h3 {
      margin-top: 10px;
      margin-bottom: -4px;
      font-size: 9px;
    }

    h2 {
      margin-top: 12px;
      margin-bottom: -4px;
      font-size: 11px;
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
