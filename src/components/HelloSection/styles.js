import { css } from '@emotion/core';
import Background from '@assets/images/bg-couple.jpg';
import Background2 from '@assets/images/bg-couple2.jpg';
// import Flower1 from '@assets/images/flower1.png';

export const styWrapperCouple = css`

  background-size: cover;
  background-image: url(${Background});
  margin-top: 10px;
  padding-top: 30px;
  background-position: center;
  width: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex: 100%;
  justify-content: center;
  align-items: center;

  .wedding-bg {
    position: absolute;
    float: left;
    background-color: transparent;
    height: 345%;
    width:100%;
    top: 1288px;
    bottom:0px;
    left:0;
  }
  
  .flower-motion-right {
    position: absolute;
    float: right;
    width: 200px;
    height: 200px;
  }

  .sub-title {
    color: #f6c578cc;
    letter-spacing: 1px;
    line-height: 20px;
    font-family: 'Mr Dafoe', cursive;
    text-shadow: 1px 1px 2px #041C32;
  }

  .child {
    background: darkorange;
  }

  .child .child-1 {
    position: absolute;
    float: left;
    top: 0;
    left: 0;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
  }

  .couple-font{    
    font-family: 'Tangerine', Sans-serif!important;
    font-size: 35px;
    text-shadow: 1px 1px 2px #041C32;
    color: #f6c578cc;
    font-weight: bold;
    margin: 15px;
  }

  .couple-fonf-and {
    text-shadow: 1px 1px 2px #041C32;
    font-family: 'Tangerine', Sans-serif!important;
    color: #f6c578cc;
    margin-top: 60px;
    font-size: 600px;
  }
  
  .parent-name {
    margin-top: -16px !important;
    color: #000;
    
  }

  @media screen and (max-width: 500px) {    
    background-image: url(${Background2});
    background-size: cover;
    width: 100%;
    height: 100%;

    .info {
      font-size: 12px;
      padding: 15px;
      margin-bottom: 45px;
    }

    .sub-title {
      font-size: 38px;
      margin: 0 0 8px 0;
    }

    .couple-wrap {
      margin-top: -30px;
    }

    .and-love {
      margin-top: 20px;
      margin-bottom: 0px;
      font-size: 100px;
      line-height: 1.5;
      font-family: 'Arizonia',Sans-serif!important;
      color: #f6c578cc;
      text-shadow: 1px 1px 2px #041C32;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
      
      .and-love {
        margin-bottom: 0px;
        font-size: 100px;
        line-height: 1.5;
        font-family: 'Arizonia',Sans-serif!important;
        color: #fff;
      }

      .sub-title {
        font-size: 34px;
        color: #f6c578cc;
        letter-spacing: 1px;
        line-height: 20px;
        font-family: 'Mr Dafoe', cursive;
        text-shadow: 1px 1px 2px #041C32;
      }
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