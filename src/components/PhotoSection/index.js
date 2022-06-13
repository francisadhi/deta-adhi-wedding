import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { potrait_photos } from './photo-data';
import { landscape_photos } from './photo-data2';

function PhotoSection() {
  const renderYoutubeVideo = () => {
    return (
      <iframe
        title="Pre-Wedding Deta & Adhi"
        width="100%"
        height="360px"
        src="https://www.youtube.com/embed/vKnkmU_W6_c"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  };

  return (
    <div id="fh5co-testimonial" className="fh5co-section-gray">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">#DetaAdhi</h2>
              <p className="sub-title">
                "Demikianlah tinggal ketiga hal ini, yaitu iman, pengharapan dan kasih, dan yang paling besar di antaranya ialah kasih." <br />
                1 Korintus 13:13.
              </p>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-10 col-md-offset-1">{renderYoutubeVideo()}</div>
          </div> */}

          {/* <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <ImageGallery items={landscape_photos} showBullets={false} />;
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br> */}

          <div className="row">

            <div className="col-md-10 col-md-offset-1">
              <ImageGallery items={landscape_photos} showBullets={false} />
            </div>

            {/* <div className="col-md-10 col-md-offset-1">
              <ImageGallery items={potrait_photos} showBullets={false} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
