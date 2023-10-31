import "./WebinarAdminCreateWebinarTab.scss";
import WebinarAdminWebinarListTab from "../WebinarAdminWebinarListTab/WebinarAdminWebinarListTab";
import CreateWebinarModal from "./CreateWebinarModal";
import { useModalContext } from "./ModalContext";
import { useState } from "react";

function WebinarAdminCreateWebinarTab({ toggle, setToggle }) {
  const { modalOpen, setModalOpen } = useModalContext();
  const [webinarTabs, setWebinarTabs] = useState([
    { id: 1, title: "Webinar 1" },
    { id: 2, title: "Webinar 2" },
    { id: 3, title: "Webinar 3" },
    { id: 4, title: "Webinar 4" },
    { id: 5, title: "Webinar 5" },
  ]);

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
            webinarTabs.map((webinar) => (
              <WebinarAdminWebinarListTab
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
