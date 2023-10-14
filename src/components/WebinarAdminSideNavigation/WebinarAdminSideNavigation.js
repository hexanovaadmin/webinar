import "./WebinarAdminSideNavigation.scss";
import "../../App.scss";
import { useState } from "react";

function WebinarAdminSideNavigation() {
  const [activeButton, setActiveButton] = useState("Webinar");
  function handleActive(button) {
    setActiveButton(button);
  }

  const navigation = [
    {
      id: 1,
      title: "Webinar",
    },
    {
      id: 2,
      title: "User 1",
    },
    {
      id: 3,
      title: "User 2",
    },
  ];

  return (
    <div className="ir-ws-flex flex-column ir-ws-align-center ir-ws-justify-space-btw ir-ws-position-relative ir-ws-navigation-main-box ir-ws-width-25">
      <div className="ir-ws-position-absolute ir-ws-flex ir-ws-align-center ir-ws-justify-center ir-ws-border-50 ir-ws-admin-logo-container">
        <img
          className="ir-ws-admin-navigation-logo"
          src={require("../../assets/images/webinarLogo.png")}
          alt="logo"
        />
      </div>

      <div className="ir-ws-flex flex-column ir-ws-align-center ir-ws-admin-container">
        <div className="ir-ws-admin-text">Admin</div>
        <ul className="ir-margin-0 ir-ws-padding-0 ir-ws-flex flex-column ir-ws-admin-box ">
          {navigation.map((item, index) => (
            <li
              className={`ir-ws-flex flex-column ir-ws-align-center ir-ws-justify-center ir-ws-admin-list  ${
                activeButton === item.title ? "active" : ""
              }`}
              key={item.id}
              onClick={() => handleActive(item.title)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="ir-ws-logout-button ">Log Out</button>
      </div>
    </div>
  );
}

export default WebinarAdminSideNavigation;
