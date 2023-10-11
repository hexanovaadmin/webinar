import "./WebinarAdminSideNavigation.scss";
import "../../App.scss";
import { useState } from "react";
function WebinarAdminSideNavigation() {
  const [activeButton, setActiveButton] = useState("Webinar");
  function handleActive(button) {
    setActiveButton(button);
  }
  const navigation = ["Webinar", "User 1", "User 2"];

  return (
    <div className="ir-ws-flex flex-column ir-ws-align-center ir-ws-navigation-main-box  ir-ws-width-25">
      <img
        className="ir-ws-position-absolute ir-ws-admin-navigation-logo"
        src={require("../../assets/images/webinarLogo.png")}
        alt="webinar logo"
      />
      <p className="ir-ws-admin-text">Admin</p>
      <ul className="ir-ws-flex flex-column ir-ws-admin-box">
        {navigation.map((item, index) => (
          <li
            className={`ir-ws-admin-list ${
              activeButton === item ? "active" : ""
            }`}
            onClick={() => handleActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <button className="ir-ws-logout-button ">Log Out</button>
    </div>
  );
}

export default WebinarAdminSideNavigation;
