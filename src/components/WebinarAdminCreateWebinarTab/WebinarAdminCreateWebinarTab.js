import "./WebinarAdminCreateWebinarTab.scss";
import WebinarAdminWebinarListTab from "../WebinarAdminWebinarListTab/WebinarAdminWebinarListTab";
import { useState } from "react";

function WebinarAdminCreateWebinarTab({ toggle, setToggle }) {
  return (
    <div className="ir-ws-admin-create-webinar-tab">
      <div className="ir-ws-create-webinar-button-container">
        <button>Create Webinar</button>
      </div>
      {toggle && (
        <WebinarAdminWebinarListTab toggle={toggle} setToggle={setToggle} />
      )}
    </div>
  );
}

export default WebinarAdminCreateWebinarTab;
