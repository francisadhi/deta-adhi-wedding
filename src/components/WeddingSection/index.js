import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  const renderGuestInfo = () => {
    return (
      <Fragment>
        <div className="col-md-8 col-md-offset-4">
          <WeddingInfoBox title="Akad Nikah" time="08.00 WIB (Live di Instagram)" date="Sabtu, 03 Oktober 2020" />
        </div>
        <ButtonLive />
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay section--bg-fixed" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="bismillah">Mohon Doa Restu</span>
              <h2 className="main-font main-font__wedding">Sakramen dan Resepsi Pernikahan</h2>
              <span className="sub-title sub-title__wedding">Akan diselenggarakan pada:</span>
            </div>
          </div>
          <div className="row animated animatedFadeInUp fadeInUp">
            {!isInvitation && renderGuestInfo()}
            {isInvitation && (
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Sakramen Pernikahan"
                  time="Akan dilaksanakan pada pukul 10.00 WIB "
                  date="Sabtu, 02 Juli 2022"
                  description="Gereja Santo Yusuf Pekerja <br/>Mertoyudan, Magelang"
                />
                <WeddingInfoBox
                  title="Resepsi Pernikahan"
                  time="Akan dilaksanakan pada pukul 14.00 WIB "
                  date="Sabtu, 02 Juli 2022"
                  description="Balkondes Duta Menoreh <br/>Desa Tanjungsari, Borobudur"
                />
              </div>
            )}
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <p className="sub-title sub-title__wedding">Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
berkenan hadir untuk memberikan doa restu kepada kami
Atas kehadiran dan doa restunya kami ucapkan terima kasih</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
