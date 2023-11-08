import "./WebinarAdminCreateWebinarTab.scss";
import WebinarAdminWebinarListTab from "../WebinarAdminWebinarListTab/WebinarAdminWebinarListTab";
import CreateWebinarModal from "./CreateWebinarModal";
import { useModalContext } from "./ModalContext";
import { useState } from "react";
import { useEffect } from "react";

function WebinarAdminCreateWebinarTab({ toggle, setToggle }) {
  const { modalOpen, setModalOpen } = useModalContext();
  const { webinarData } = useModalContext();

  function handleModalOpen() {
    setModalOpen(true);
  }

  return (
    <div className="ir-ws-admin-create-webinar-tab">
      {toggle ? null : (
        <div className="ir-ws-create-webinar-button-container">
          <button onClick={handleModalOpen}>Create Webinar</button>
        </div>
      )}
      {modalOpen && <CreateWebinarModal type={"Create Webinar"} />}
      {toggle && (
        <div className="ir-ws-admin-webiner-list-container">
          {toggle &&
            webinarData.map((webinar) => (
              <WebinarAdminWebinarListTab
                id={webinar.id}
                key={webinar.id}
                title={webinar.title}
                toggle={toggle}
                setToggle={setToggle}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default WebinarAdminCreateWebinarTab;
