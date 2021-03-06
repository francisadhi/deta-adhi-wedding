import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from '@assets/images/deta-adhi.png';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';

const IMAGE_URL = `https://clever-meitner-686fd2.netlify.app/static/adhi-deta2-d98cae194da87fc6af3da0835071d378.jpg`;
const META_DESCRIPTION = `Dengan memohon penuh rasa syukur, teriring niat untuk membentuk keluarga kecil katolik, kami mohon do'a agar senantiasa diberikan kelancaran. - Deta & Adhi`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Deta ❤️ Adhi Wedding</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />

        {/* font and SEO tags */}
        <meta property="og:title" content="The Wedding of Deta & Adhi" />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="og:url" content="https://adhideta.herokuapp.com" />
        <meta property="og:site_name" content="The Wedding of Deta & Adhi" />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta name="twitter:title" content="The Wedding of Deta & Adhi" />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE_URL} />
        {/* <meta name="twitter:url" content="https://adhideta.herokuapp.com" /> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@idAdhikusuma" />

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Arizonia&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Arizonia&family=Dancing+Script&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Tangerine&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
