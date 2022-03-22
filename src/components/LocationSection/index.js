import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box fadeInUp animated-fast">
              <AnimationOnScroll initiallyVisible={true} animateIn="animate__flip">
                <h2 className="main-font">Lokasi Acara</h2>
              </AnimationOnScroll>
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Click untuk melihat peta di Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>Balkondes Duta Menoreh Desa Tanjungsari</strong>
                </a>{' '}
                <br />
                <br />
                Jl. Giri Tengah No.KM. 105, Dusun V, Tanjungsari, Kec. Borobudur, <br />
                Kabupaten Magelang, Jawa Tengah 56553
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d831.354195953887!2d110.1956204162204!3d-7.617420635661039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8ce71dac4acd%3A0x64e89bf8643a93d6!2sBalkondes%20Duta%20Menoreh%20Desa%20Tanjungsari!5e0!3m2!1sid!2sid!4v1647348159816!5m2!1sid!2sid"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Dinda & Indra Wedding Party"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
