import React from "react";
import WebinarAdminContent from "../../components/WebinarAdminContentWebinar/WebinarAdminContent";
import WebinarAdminSideNavigation from "../../components/WebinarAdminSideNavigation/WebinarAdminSideNavigation";

function Webinar() {
  return (
    <div className="ir-ws-flex ">
      <WebinarAdminSideNavigation />
      <WebinarAdminContent />
    </div>
  );
}

export default Webinar;
