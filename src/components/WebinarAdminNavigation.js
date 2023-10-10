import "./WebinarAdminNavigation.scss";
import logo from "../images/webinarLogo.jpg";
import { useState } from "react";
function WebinarAdminNavigation() {
  const [activeButton, setActiveButton] = useState("webinar");
  function handleActive(button) {
    setActiveButton(button);
  }
  return (
    <div className="ir-ws-navigation-box">
      <img className="ir-ws-navigation-logo" src={logo} alt="logo" />
      <div className="ir-ws-navigation-content">
        <p className="ir-ws-navigation-admin-text">Admin</p>
        <button
          className={`ir-ws-navigation-button ir-ws-navigation-create-webinar ${
            activeButton === "webinar" ? "activeButton" : ""
          }`}
          onClick={() => handleActive("webinar")}
        >
          Webinar
        </button>
        <button
          className={`ir-ws-navigation-button ir-ws-navigation-create-webinar ${
            activeButton === "user 1" ? "activeButton" : ""
          }`}
          onClick={() => handleActive("user 1")}
        >
          User
        </button>
        <button
          className={`ir-ws-navigation-button ir-ws-navigation-create-webinar ${
            activeButton === "user 2" ? "activeButton" : ""
          }`}
          onClick={() => handleActive("user 2")}
        >
          User
        </button>
      </div>
      <div className="ir-ws-navigation">
        <button className="ir-ws-navigation-logout">Log Out</button>
      </div>
    </div>
  );
}

export default WebinarAdminNavigation;
