import React from "react";
import "./WebinarAdminWebinarListTab.scss";
import DeleteWebinarModal from "../WebinarAdminCreateWebinarTab/DeleteWebinarModal";
import CreateWebinarModal from "../WebinarAdminCreateWebinarTab/CreateWebinarModal";

import { useModalContext } from "../WebinarAdminCreateWebinarTab/ModalContext";

function WebinarAdminWebinarListTab({ title }) {
  const webinarlistTab = ["Cancel", "Update", "Transaction"];
  const accordianListButton = [
    "Username",
    "Time/Date",
    "Status of Transaction",
    "Tax Invoice Number",
    "Invoice",
  ];
  const webinarData = [
    {
      userName: "Sunny",
      timeDate: "28/10/2023  11:30 am",
      transaction: "Successful",
      invoiceNumber: 23456,
    },
    {
      userName: "Mohit",
      timeDate: "28/10/2023  11:30 am",
      transaction: "Successful",
      invoiceNumber: 2334556,
    },
    {
      userName: "Saheb",
      timeDate: "28/10/2023  11:30 am",
      transaction: "Successful",
      invoiceNumber: 2363455,
    },
  ];
  const [isContentVisible, setContentVisible] = React.useState(false);
  const { modalOpen, openModal, modalType, setModalType } = useModalContext();
  const toggleContentVisibility = () => {
    setContentVisible(!isContentVisible);
  };
  const handleCancelClick = () => {
    openModal();
    setModalType("delete");
  };

  const handleUpdateClick = () => {
    openModal();
    setModalType("update");
  };
  return (
    <div
      className={`ir-ws-webinar-list-tab ${!isContentVisible ? "active" : ""}`}
    >
      <div className="ir-ws-admin-webinar-content">
        <p className="ir-ws-webinar-title-text">{title}</p>
        <div className="ir-ws-admin-list-button-container">
          {webinarlistTab.map((item, index) => (
            <div className="button-with-icon" key={index}>
              {item === "Cancel" ? (
                <button
                  className="ir-ws-webinar-cancel-button"
                  onClick={handleCancelClick}
                >
                  {item}
                </button>
              ) : item === "Update" ? (
                <button
                  className="ir-ws-webinar-update-button"
                  onClick={handleUpdateClick}
                >
                  {item}
                </button>
              ) : item === "Transaction" ? (
                <button
                  className="ir-ws-webinar-transaction-button"
                  onClick={toggleContentVisibility}
                >
                  {item}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="ir-ws-admin-drop-down-icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              ) : (
                <button key={index}>{item}</button>
              )}
            </div>
          ))}
        </div>
      </div>
      {isContentVisible && (
        <div>
          <div className="ir-ws-webinar-list-accordian-tab">
            {accordianListButton.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div>
            {webinarData.map((item, index) => (
              <div className="ir-ws-webinar-list-data">
                <p>{item.userName}</p>
                <p>{item.timeDate}</p>
                <p>{item.transaction}</p>
                <p>{item.invoiceNumber}</p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ir-ws-webinar-download-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      {modalOpen && modalType === "delete" && <DeleteWebinarModal />}
      {modalOpen && modalType === "update" && (
        <CreateWebinarModal type={"Update Webinar"} />
      )}
    </div>
  );
}

export default WebinarAdminWebinarListTab;
