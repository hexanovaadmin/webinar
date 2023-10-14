import React, { useState } from "react";
import "./WebinarAdminCustomTab.scss";

const WebinarAdminCustomTab = ({ toggle, setToggle }) => {
  function handleCreateToggle() {
    setToggle(false);
  }
  function handleShowWebinarListToggle() {
    setToggle(true);
  }
  return (
    <div className="ir-ws-webinar-admin-custom-tab">
      <p
        onClick={handleCreateToggle}
        className={`ir-ws-custom-tab-button ${
          toggle === true ? "ir-ws-cutom-tab-active" : ""
        }`}
      >
        Create Webinar
      </p>
      <p
        className={`ir-ws-custom-tab-button ${
          toggle === false ? "ir-ws-cutom-tab-active" : ""
        }`}
        onClick={handleShowWebinarListToggle}
      >
        Webinar List
      </p>
    </div>
  );
};

export default WebinarAdminCustomTab;
