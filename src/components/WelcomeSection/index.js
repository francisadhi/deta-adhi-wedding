import React, { Fragment, useState } from 'react';
import { object, string, bool, func } from 'prop-types';
// import { Link } from 'gatsby';
import Wave from "react-wavify";
import styled from '@emotion/styled';
import Background from '@assets/images/adhi-deta1.jpg';

import WeddingImg from '@assets/images/wedding-logo.png';
import CountContainer from './CountContainer';
import ScrollToDown from './ScrollToDown';
import { styWrapper, styHero, styBackground, styButtonWrapper } from './styles';
import "animate.css/animate.min.css";

const DELAY_TIME = 1500;

const WaveContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -5px;
  height: ${(props) => props.level + 'vh'};
  display: flex;
  z-index: 1;
  transform: rotate(180deg);
`;

function WelcomeSection({ location, guestName, isInvitation, isAnonymGuest, codeLink, onClickDetail }) {
  const [loading, setLoading] = useState(false);
  const [alreadyDownloadData, setAlreadyDownloadData] = useState(false);

  const handleScrollTo = () => {
    /** scroll into detail view */
    const element = document.getElementById('fh5co-couple');
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  const handleShowDetail = () => {
    if (loading) return undefined;

    try {
      const myAudio = document.getElementById('myAudio');
      myAudio.play();
    } catch {
      console.error('FAILED_TO_PLAY_MUSIC');
    }

    onClickDetail();

    if (!alreadyDownloadData) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setAlreadyDownloadData(true);
        handleScrollTo();
      }, DELAY_TIME);
    } else {
      handleScrollTo();
    }
  };

  const renderGuestSection = () => {
    if (isAnonymGuest) return <h2 className="to-dearest-name">Dear Friends,</h2>;

    return (
      <Fragment>
        {/* <h2 className="to-dearest-name">Dear Friends,</h2> */}
        <h3 className="to-dearest">To our Dearest</h3>
        <h2 className="to-dearest-name">{guestName}</h2>
      </Fragment>
    );
  };

  return (
    <div css={styHero}>
      <header
        id="fh5co-header"
        role="banner"
        className="fh5co-cover"
        css={styBackground}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>

        {/* <WaveContainer level={110}>
          <Wave
            fill="#000000"
            paused={false}
            opacity="0.25"
            options={{
              height: 45,
              amplitude: 30,
              speed: 0.1,
              points: 4,
            }}
          />
        </WaveContainer>
        <WaveContainer level={110}>
          <Wave
            // 
            fill="#DDDDDD"
            paused={false}
            opacity="0.22"
            options={{
              height: 20,
              amplitude: 10,
              speed: 0.2,
              points: 3,
            }}
          />
        </WaveContainer>
        <WaveContainer level={110}>
          <Wave
            fill="#301B3F"
            opacity="0.20"
            paused={false}
            options={{
              height: 75,
              amplitude: 20,
              speed: 0.3,
              points: 2,
            }}
          />
        </WaveContainer> */}
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center">
              <img src={WeddingImg} alt="wedding-Deta-Adhi" />
              <h4 className="sub-title">The Wedding of</h4>
              <h1 className="title">Deta &amp; Adhi</h1>
              <div className={isAnonymGuest ? 'margin__bottom' : ''}>
                <CountContainer />
              </div>
              {renderGuestSection()}
              {isInvitation && (
                <div className="row" css={styButtonWrapper}>
                  <div className="col-md-3">
                    {/* <Link to={`/e-ticket?${codeLink}`}>
                      <button className="btn btn-default btn-block">Lihat e-Ticket</button>
                    </Link> */}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <ScrollToDown loading={loading} onClick={handleShowDetail} />
          </div>
        </div>
        <div class="ocean">
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </header>
    </div>
  );
}

WelcomeSection.propTypes = {
  guestName: string.isRequired,
  isInvitation: bool.isRequired,
  isAnonymGuest: bool.isRequired,
  location: object.isRequired,
  codeLink: string,
  onClickDetail: func.isRequired,
};

WelcomeSection.defaultProps = {
  codeLink: '',
};

export default WelcomeSection;
