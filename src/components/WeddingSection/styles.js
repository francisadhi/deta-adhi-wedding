import { css } from '@emotion/core';
import Background from '@assets/images/karangpramuka-4.jpg';

export const styWrapper = css`
  background-image: url(${Background});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  color: #fff !important;

  
  .wedding-bg {
    position: absolute;
    float: left;
    background-color: transparent;
    height: -245%;
    width:100%;
    top: -198px;
    bottom:0px;
    left:0;
    
    @media screen and (max-width: 400px) {
      top: -68px;
    }
    
    @media screen and (max-width: 500px) {
      top: -68px;
    }
  }
  
  .wedding-bg-bottom {
    position: absolute;
    float: left;
    background-color: transparent;
    height: -245%;
    width:100%;
    bottom: -48px;
    margin-left: 0px;
    left:0;
    
    @media screen and (max-width: 400px) {    
      position: absolute;
      float: left;
      background-color: transparent;
      height: -245%;
      width:100%;
      bottom: -8px;
      margin-left: 0px;
      left:0;
    }
  }

  .sub-title-bottom {
    color: #fff !important;
    font-size: 16px;
    font-family: 'Work Sans',Arial,sans-serif;
    font-weight: 400 !important;
    margin-bottom: 260px;
    margin-top: -100px;

    
    @media screen and (max-width: 400px) {    
      color: #fff !important;
      font-size: 16px;
      font-family: 'Work Sans',Arial,sans-serif;
      font-weight: 400 !important;
      margin-bottom: 100px;
      margin-top: -100px;
    }

    
    @media screen and (max-width: 500px) {    
      color: #fff !important;
      font-size: 16px;
      font-family: 'Work Sans',Arial,sans-serif;
      font-weight: 400 !important;
      margin-bottom: 250px;
      margin-top: 0px;
    }
  }

  .fh5co-heading {
    margin-top: 135px;
    
    @media screen and (max-width: 400px) {
      margin-top: 85px;
    }
  }

  .bismillah {
    color: #fff !important;
    font-size: 16px !important;
    font-family: sans-serif;
  }

  .transition-top {

  }

  .sub-title {
    color: #fff !important;
    font-size: 16px;
    font-family: 'Work Sans', Arial, sans-serif;
    font-weight: 400 !important;

    @media screen and (max-width: 400px) {
      font-size: 15px !important;
    }
  }

  .text__live {
    text-align: center;
    margin-top: 24px;
  }

  .main-font {
    margin-top: 12px;

    @media screen and (max-width: 400px) {
      line-height: 1;
      margin-bottom: 8px;
    }
  }
  
  .section--bg-fixed {
    min-height: 100vh;
    background-attachment: fixed;
    background-color: #f0f8ff;
    opacity: .9;
  }
`;

export const styButtonWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: pulse 2s ease infinite;
  margin-top: -8px;
  border: none;

  .img__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 500px;
    border-radius: 24px;
    background: #f6c578cc;
    padding: 8px 16px;
  }

  i {
    margin-right: 4px;
  }

  img {
    max-width: 28px;
    margin-right: 8px;
    margin-bottom: 0;
  }

}
`;
