import React, { useState, useEffect, Fragment } from 'react';
import { object } from 'prop-types';
import getQueryValue from '@helpers/getQueryValue';
/**
 * List of local components
 */
import MainLayout from '@components/Layout';
import WelcomeSection from '@components/WelcomeSection';
import HelloSection from '@components/HelloSection';
import WeddingSection from '@components/WeddingSection';
import LocationSection from '@components/LocationSection';
import PhotoSection from '@components/PhotoSection';
import ConfirmationSection from '@components/ConfirmationSection';
import FooterSection from '@components/FooterSection';
import CovidSection from '@components/Covid19';
import FloatingMusic from '@components/FloatingMusic/Loadable';
import useGuestData from '@/hooks/useGuestData';

function Home({ location }) {
  const guestName = decodeURIComponent(getQueryValue(location, 'to') || '');
  const isInvitation = getQueryValue(location, 'type') === 'invitation';
  // const isInvitation = true;
  const firstName = guestName.replace(/ .*/, '');
  const isAnonymGuest = guestName === '' && !isInvitation;
  const codeLink = getQueryValue(location, 'code') || '';
  const finalTicketLink = `code=${codeLink}&name=${guestName}`;

  const [selectedGuest, setSelectedGuest] = useState({});

  // const [selectedGuest, setSelectedGuest] = useState({});

  const [showDetailContent, setShowDetailContent] = useState(false);

  const { data } = useGuestData();
  const guest = data.find((g) => (g.code || '').toUpperCase() === codeLink);

  useEffect(() => {

    if (guest) {
      if (guest.name.toUpperCase().includes(guestName.toUpperCase())) {
        setSelectedGuest(guest);
        return;
      }
    }
  })

  // console.log(guest);

  const handleClickDetail = () => {
    setShowDetailContent(true);
  };

  const renderDetailContent = () => {
    if (!showDetailContent) return null;

    return (
      <Fragment>
        <HelloSection isInvitation={isInvitation} />
        <WeddingSection isInvitation={isInvitation} />
        {isInvitation && <CovidSection />}
        <PhotoSection />
        {isInvitation && <LocationSection />}
        <ConfirmationSection guestName={firstName} guestFullName={selectedGuest.fullname} isInvitation={isInvitation} codeLink={finalTicketLink} />
        <FooterSection isInvitation={isInvitation} />
      </Fragment>
    );
  };

  return (
    <MainLayout>
      <WelcomeSection
        guestName={selectedGuest.fullname}
        isAnonymGuest={isAnonymGuest}
        isInvitation={isInvitation}
        location={location}
        codeLink={finalTicketLink}
        onClickDetail={handleClickDetail}
      />
      {renderDetailContent()}
      <FloatingMusic />
    </MainLayout>
  );
}

Home.propTypes = {
  location: object.isRequired,
};

export default Home;
