import React, { useState } from "react";
import "./WebinarAdminWebinarListTab.scss";

const WebinarAdminWebinarListTab = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
    console.log("first");
  };
  return (
    <div
      className={`ir-ws-webinar-admin-list-box ir-ws-flex ir-ws-justify-center ir-ws-width-100`}
    >
      <div
        className={`ir-we-webinar-list ir-ws-position-relative ${
          isAccordionOpen ? "close" : ""
        } `}
      >
        <div className="ir-ws-webinar-list-items">
          <p className="ir-ws-webinar-list-heading">Webinar Name</p>
          <div className="ir-ws-webinar-list-buttons ir-ws-flex  flex-column">
            <button className="ir-ws-webinar-list-button ir-ws-no-border">Cancel</button>
            <button className="ir-ws-webinar-list-button ir-ws-no-border">Update</button>
            <button className="ir-ws-webinar-list-button ir-ws-no-border">Transaction</button>
            <button className="ir-ws-webinar-list-button ir-ws-no-border">Transaction</button>
          </div>
        </div>
        <div
          className="ir-ws-webinar-uparrow ir-ws-position-absolute"
          onClick={toggleAccordion}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24">
            <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WebinarAdminWebinarListTab;
