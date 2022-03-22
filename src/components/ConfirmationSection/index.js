import React from 'react';
import { string, bool } from 'prop-types';
import { Link } from 'gatsby';

import { styWrapper, styFlex } from './styles';

import { AnimationOnScroll } from 'react-animation-on-scroll';

function ConfirmationSection({ isInvitation, guestName, codeLink }) {
  if (!isInvitation) return null;

  return (
    <div id="fh5co-started" className="fh5co-bg" css={styWrapper}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <AnimationOnScroll initiallyVisible={true} duration={5} animateIn="animate__swing">
              <h2 className="main-font">{` Apakah kamu hadir, ${guestName}?`}</h2>
            </AnimationOnScroll>
            <p>
              Atas kehadiran & do'a restu saudara/i, <br /> kami ucapkan terima kasih.
            </p>
          </div>
        </div>
        <AnimationOnScroll animateIn="animate__bounceIn">
          <div className="row" css={styFlex}>
            <div className="col-md-3">
              <Link to={`e-ticket?${codeLink}`}>
                <button className="btn btn-default btn-block">Lihat e-Ticket</button>
              </Link>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
}

ConfirmationSection.propTypes = {
  codeLink: string.isRequired,
  isInvitation: bool.isRequired,
  guestName: string.isRequired,
};

export default React.memo(ConfirmationSection);
