import "./WebinarAdminCreateWebinarTab.scss";
import WebinarAdminWebinarListTab from "../WebinarAdminWebinarListTab/WebinarAdminWebinarListTab";
import CreateWebinarModal from "./CreateWebinarModal";
import { useModalContext } from "./ModalContext";
import { useState } from "react";

function WebinarAdminCreateWebinarTab({ toggle, setToggle }) {
  const { openModal } = useModalContext();
  const [webinarTabs, setWebinarTabs] = useState([
    { id: 1, title: "Webinar 1" },
    { id: 2, title: "Webinar 2" },
    { id: 2, title: "Webinar 3" },
    { id: 2, title: "Webinar 4" },
    { id: 2, title: "Webinar 5" },
    // { id: 2, title: "Webinar 6" },
    // { id: 2, title: "Webinar 7" },
    // { id: 2, title: "Webinar 8" },
    // { id: 2, title: "Webinar 9" },
  ]);

  const addWebinarTab = () => {
    setWebinarTabs([...webinarTabs, { id: Date.now(), title: "New Webinar" }]);
  };

  return (
    <div className="ir-ws-admin-create-webinar-tab">
      {toggle ? null : (
        <div className="ir-ws-create-webinar-button-container">
          <button onClick={openModal}>Create Webinar</button>
        </div>
      )}
      <CreateWebinarModal />
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
