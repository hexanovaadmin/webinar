import React from "react";
import "./WebinarAdminWebinarListTab.scss";

const WebinarAdminWebinarListTab = () => {
  return (
    <div className="WebinerListBox">
      <div className="WebinerList">
        <div className="WebinerListItems">
          <p className="WebinarListHeading">Webinar Name</p>
          <div className="buttons">
            <button>Cancel</button>
            <button>Update</button>
            <button>Transaction</button>
            <button>Transaction</button>
          </div>
        </div>
        <div className="arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg>
        </div>
      </div>
    </div>
  );
};

export default WebinarAdminWebinarListTab;
