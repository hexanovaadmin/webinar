import { useState } from "react";
import "./WebinarAdminSideNavigation.scss";

const WebinarAdminSideNavigation = () => {
  const [activeAltTitle, setActiveAltTitle] = useState("Chat");
  const ChatNavValues = [
    {
      id: 1,
      alttitle: "Chat",
    },
    {
      id: 2,
      alttitle: "Favourites",
    },
    {
      id: 3,
      alttitle: "Archive",
    },
    {
      id: 4,
      alttitle: "Notifications",
    },
    {
      id: 5,
      alttitle: "Settings",
    },
    {
      id: 6,
      alttitle: "Profile",
    },
  ];

  return (
    <div className="ir-chat-navigation-container side-menu flex-lg-column">
      <div className="navbar-brand-box">
        <a className="logo logo-light" href="https://ir4u.info/">
          <img src={require("../../assets/images/ir4u4.png")} alt="logo" />
        </a>
      </div>
      <ul className="side-menu-nav">
        {ChatNavValues.map((val, id) => {
          if (val.id !== 6) {
            return (
              <li
                key={id}
                className={`side-nav-item ${
                  activeAltTitle === val.alttitle ? "activeMenuItem" : ""
                }`}
                id={val.alttitle}
                onClick={() => setActiveAltTitle(val.alttitle)}
              >
                <a
                  className={`nav-link ${
                    activeAltTitle === val.alttitle
                      ? "active alttitle-text"
                      : ""
                  }`}
                >
                  <span className="">{val.alttitle}</span>
                </a>
              </li>
            );
          }
        })}
        <li className="side-nav-item" id="Profile">
          <span className="ir-nav-tooltip">Profile</span>
        </li>
        <li className="side-nav-item logout-button">
          <div className="nav-icon nav-link">
            <span className="icon-text">Logout</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WebinarAdminSideNavigation;
