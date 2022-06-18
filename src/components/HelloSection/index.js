import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/bride3.png';
import Groom from '@assets/images/groom3.png';
import WeddingBg from '@assets/images/wedding-bg.png';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import Fade from 'react-reveal//Fade';

import { styWrapperCouple } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = isInvitation ? 'Sabtu, 02 Juli 2022, Gereja Bunda Maria Penolong Abadi. Deyangan, Mertoyudan' : 'Sabtu, 02 Juli 2022';

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapperCouple}>
        <div className="container">
          {/* <div className="flower-motion-right">
            <img src={Flower1} width="100%" height="80%" alt="groom" loading="lazy" />
          </div> */}
          <br></br>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading fadeInUp animated-fast">
              <AnimationOnScroll animateIn="animate__bounceIn">
                <h2 className="sub-title">Berkah Dalem</h2>
              </AnimationOnScroll>
              <br></br>
              <br></br>
              <br></br>
              <h4 className="info">"Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia."
                <br></br>– Matius 19:6 –</h4>
              {/* <AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand">
                <h3 className="sub-title hs">{finalSubtitle}</h3>
              </AnimationOnScroll> */}
            </div>
          </div>
          <div className="couple-wrap">
            <Fade left>
              <div className="couple-half">
                <div className="groom">
                  <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
                </div>
                <div className="desc-groom">
                  <h1 className="couple-font">Bernadeta Debi Apriliana, S.K.M</h1>
                  <p className="parent-name parent-name__top">
                    Putri Bapak Yulius Bambang Sriyanto, BA <br />& Ibu Leocardia Endang Prihanti, S.Pd
                  </p>
                </div>
              </div>
            </Fade>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <div className="couple-font-and">&</div>
            </div>
            <Fade right>
              <div className="couple-half">
                <div className="bride">
                  <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
                </div>
                <div className="desc-bride">
                  <h1 className="couple-font">FX Novi Adhi Nugroho, S.Kom.</h1>
                  <p className="parent-name">
                    Putra Bapak (Alm) Yohanes Mudiyanto <br />& Ibu Asiyah Maria Immaculata, S.Pd
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          <br />
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <p className="info">
                  Tuhan membuat segala sesuatu indah pada waktunya.
                  Indah saat Dia mempertemukan, indah saat Dia menumbuhkan kasih,
                  dan indah saat Dia mempersatukan kami dalam suatu ikatan pernikahan Kudus
                </p>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>

      {!isInvitation ? (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapperCouple}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font">Seputar Covid-19</h2>
                <p className="info">
                  Berkaitan dengan kondisi pandemik saat ini, keberlangsungan acara kami mengacu pada pedoman
                  Kementerian Kesehatan, yaitu memberlakukan pembatasan jarak dan pembatasan jumlah tamu undangan.
                </p>
                <p className="info">
                  Maka dari itu, dengan segala kerendahan hati, kami mohon maaf jika belum bisa mengundang saudara/i
                  dihari bahagia kami. Sekiranya do'a dari saudara/i sudah lebih dari cukup bagi kami. Semoga kita semua
                  selalu dalam lindungan Tuhan.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
