import React from "react";
import WebinarAdminContent from "../../components/WebinarAdminContentWebinar/WebinarAdminContent";
import WebinarAdminSideNavigation from "../../components/WebinarAdminSideNavigation/WebinarAdminSideNavigation";
import { ModalProvider } from "../../components/WebinarAdminCreateWebinarTab/ModalContext";

function Webinar() {
  return (
    <div className="ir-ws-flex ">
      <ModalProvider>
        <WebinarAdminSideNavigation />
        <WebinarAdminContent />
      </ModalProvider>
    </div>
  );
}

export default Webinar;
