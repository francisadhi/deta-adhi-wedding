import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/p-deta.jpg';
import Groom from '@assets/images/p-adhi.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = isInvitation ? 'Sabtu, 02 Juli 2022, Balkondes Tanjungsari, Borobudur' : 'Sabtu, 02 Juli 2022';

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Salam Sejahtera</h2>
              <h3 className="sub-title hs">{finalSubtitle}</h3>
              <p className="info">
              Tuhan membuat segala sesuatu indah pada waktunya.
Indah saat Dia mempertemukan, indah saat Dia menumbuhkan kasih,
dan indah saat Dia mempersatukan kami dalam suatu ikatan pernikahan Kudus
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Bernadeta Debi Apriliana, S.K.M</h3>
                <p className="parent-name parent-name__top">
                  Putri Bapak Yulius Bambang Sriyanto <br />& Ibu Leocardia Endang Prihanti
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">FX Novi Adhi Nugroho, S.Kom.</h3>
                <p className="parent-name">
                  Putra Bapak (Alm) Yohanes Mudiyanto <br />& Ibu Asiyah Maria Immaculata
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isInvitation ? (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
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
                  selalu dalam lindungan Allah SWT. Aamiin ya rabbal allamiin..
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
