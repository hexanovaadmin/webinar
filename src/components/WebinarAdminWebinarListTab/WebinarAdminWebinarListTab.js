import React, { useState } from "react";
import "./WebinarAdminWebinarListTab.scss";

function WebinarAdminWebinarListTab({title}) {
  const listTabButton = ["Cancel", "Update", "Transaction", "Transaction"];
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setContentVisible(!isContentVisible);
  };

  return (

    <div
      className={`ir-ws-webinar-list-tab ${!isContentVisible ? "active" : ""}`}
    >
      <div
        className="ir-ws-admin-webinar-content"
        onClick={toggleContentVisibility}
      >
        <p className="ir-ws-admin-webinar-name">{title}</p>
       
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="ir-ws-admin-drop-down-icon"
        >
          <path
            fill-rule="evenodd"
            d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      {isContentVisible && (
        <div className="ir-ws-admin-list-button-container">
          {listTabButton.map((item, index) => (
            <button key={index}>{item}</button>
          ))}
        </div>
      )}
    </div>
  );
}

export default WebinarAdminWebinarListTab;
