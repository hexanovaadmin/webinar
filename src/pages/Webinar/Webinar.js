import React from 'react'
import WebinarAdminContent from '../../components/WebinarAdminContentWebinar/WebinarAdminContent'
import WebinarAdminSideNavigation from "../../components/WebinarAdminSideNavigation/WebinarAdminSideNavigation";

function Webinar() {
  return (
    <div>
      <WebinarAdminSideNavigation />
      <WebinarAdminContent/>
    </div>
  );
}

export default Webinar;
