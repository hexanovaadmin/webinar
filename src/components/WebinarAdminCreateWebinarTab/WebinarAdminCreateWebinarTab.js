import "./WebinarAdminCreateWebinarTab.scss";
import WebinarAdminWebinarListTab from "../WebinarAdminWebinarListTab/WebinarAdminWebinarListTab";
import CreateWebinarModal from "./CreateWebinarModal";
import { useModalContext } from "./ModalContext";

function WebinarAdminCreateWebinarTab({ toggle, setToggle }) {
  const { openModal } = useModalContext();

  return (
    <div className="ir-ws-admin-create-webinar-tab">
      <div className="ir-ws-create-webinar-button-container">
        <button onClick={openModal}>Create Webinar</button>
      </div>
      <CreateWebinarModal />
      {toggle && (
        <WebinarAdminWebinarListTab toggle={toggle} setToggle={setToggle} />
      )}
    </div>
  );
}

export default WebinarAdminCreateWebinarTab;
