import { css } from '@emotion/core';

export const newCss = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400');

  * {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    margin: 0;
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Montez:300,400,500,700');
    font-family: 'Ubuntu', sans-serif;
    background-color: #3f32e5;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #1c1c1c;
    display: flex;
    justify-content: center;
  }


  .ticket-system {
    max-width: 385px;
    .ticket {
      display: flex;
  
      #qrcode {
        justify-content: center;
        align-content: center;
        margin: 12px auto;
        
        width: 70px;
        height: 70px;
      }
    }
    .top {
      display: flex;
      align-items: center;
      flex-direction: column;
      .title {
        font-weight: normal;
        font-size: 2.9em;
        text-align: center;
        margin-left: 20px;
        margin-bottom: 10px;
        margin-top: 10px;
        color: #005555;
        font-family: 'Montez', Arial, sans-serif;
      }
      .printer {
        margin-top: 0px;
        width: 90%;
        height: 20px;
        border: 5px solid #354259;
        border-radius: 10px;
        box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.2);
      }
    }

    .receipts-wrapper {
      overflow: hidden;
      margin-top: -10px;
      padding-bottom: 10px;
    }

    .receipts {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      transform: translateY(-510px);

      animation-duration: 2.5s;
      animation-delay: 500ms;
      animation-name: print;
      animation-fill-mode: forwards;


      .and-love {
        font-weight: normal;
        font-size: 2.9em;
        text-align: center;
        color: #F900BF;
      }

      .receipt {
        padding: 10px 30px 10px 30px;
        text-align: center;
        min-height: 200px;
        width: 88%;
        background-color: #FAF0D7;
        border-radius: 10px 10px 20px 20px;
        box-shadow: 1px 3px 8px 3px rgba(0, 0, 0, 0.2);

        .airliner-logo {
          max-width: 80px;
        }

        .route {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 35px 0;

          .plane-icon {
            width: 30px;
            height: 30px;
            transform: rotate(90deg);
          }
          h2 {
            font-weight: 300;
            font-size: 3.9em;
            margin: 0;
            font-family: 'Montez', Arial, sans-serif;
          }
        }

        .details {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;

          .item {
            display: flex;
            flex-direction: column;
            min-width: 70px;

            span {
              font-size: .8em;
              color: rgba(28, 28, 28, .7);
              font-weight: 500;
            }
            h3 {
              margin-top: 10px;
              margin-bottom: 25px;
            }
          }
        }

        &.qr-code {
          height: 110px;
          min-height: unset;
          position: relative;
          border-radius: 20px 20px 10px 10px;
          display: flex;
          align-items: center;

          //TODO: replace with svg
          &::before {
            content: '';
            background: linear-gradient(to right, #fff 50%, #3f32e5 50%);
            background-size: 22px 4px, 100% 4px;
            height: 4px;
            width: 90%;
            display: block;
            left: 0;
            right: 0;
            top: -1px;
            position: absolute;
            margin: auto;
          }

          .qr {
            width: 70px;
            height: 70px;
          }
          
          .description {
            margin-left: 20px;

            h2 {
              margin: 0 0 5px 0;
              font-weight: 500;
            }
            p {
              margin: 0;
              font-weight: 400;
            }
          }
        }
      }
    }
  }

  @keyframes print {
    0% {
      transform: translateY(-510px)
    }
    35% {
      transform: translateY(-395px);
    }
    70% {
      transform: translateY(-140px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const styWrapper = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400');

  .container {
    margin: 30px auto;
    overflow: hidden;
    box-shadow: 0 0 10px rgb(202, 202, 204);
    background-color: ;
    border-radius: 2px;
    padding: 0 16px;
  }

  .ticket {
    display: flex;

    #qrcode {
      justify-content: center;
      align-content: center;
      margin: 12px auto;
    }
  }

  .details {
    color: #828282;
    padding: 16px 0;
    border-top: 1px dashed #c3c3c3;
  }

  .tinfo {
    font-size: 10px;
    font-weight: 300;
    color: #555;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 16px 0 0 0;
  }

  .tdata {
    font-size: 1em;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.5px;
    margin: 0;
  }

  .additional {
    font-size: 10px;
  }

  .name {
    font-size: 1.3em;
    font-weight: 500;
  }

  .masinfo {
    display: block;
  }
  .left,
  .right {
    width: 49%;
    display: inline-table;
  }

  .nesp {
    letter-spacing: 0px;
  }

  .btn {
    margin-right: 4px;
    margin-bottom: 4px;
    font-family: 'Work Sans', Arial, sans-serif;
    font-size: 12px;
    font-weight: 400;
    border-radius: 30px;
    transition: 0.5s;
    padding: 8px 20px;
  }

  .primary {
    background: #f14e95;
    color: #fff;
    border: none;
  }
`;

export const styTicket = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 18px);
  padding: 0 20px;

  .homepage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }

  .title {
    font-family: 'Cookie', cursive;
    font-weight: 600;
    letter-spacing: 4px;
    font-size: 45px;
    user-select: none;
    margin-top: 20px;
    text-align: center;
  }

  .sub-title-ticket {
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1.7rem;
    user-select: none;
    margin-top: 20px;
    text-align: center;
  }

  .input-ticket {
    width: 85vw;
    min-width: auto;

    input {
      font-family: 'Work Sans', Courier, monospace;
      font-size: 18px;
      width: 100%;
      text-align: center;
      border-radius: 12px;
      padding: 10px 30px 10px 10px;
      background: transparent;
      border: 0.5px solid rgba(0, 0, 0, 0.3);
    }

    input[type='text']:disabled {
      background: #dddddd;
    }
  }
`;
