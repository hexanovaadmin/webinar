import { useState } from "react";
import WebinarAdminCreateWebinarTab from "../WebinarAdminCreateWebinarTab/WebinarAdminCreateWebinarTab";
import WebinarAdminCustomTab from "../WebinarAdminCustomTab/WebinarAdminCustomTab";
import "./WebinarAdminContent.scss";
function WebinarAdminContent() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="ir-ws-webiner-admin-container">
      <p className="ir-ws-webinar-text">Webinar</p>
      <WebinarAdminCustomTab toggle={toggle} setToggle={setToggle} />
      <WebinarAdminCreateWebinarTab toggle={toggle} setToggle={setToggle} />
    </div>
  );
}

export default WebinarAdminContent;

