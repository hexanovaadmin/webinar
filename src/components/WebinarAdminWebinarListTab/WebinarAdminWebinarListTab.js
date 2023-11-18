import React, { useState } from "react";
import "./WebinarAdminWebinarListTab.scss";
import DeleteWebinarModal from "../WebinarAdminCreateWebinarTab/DeleteWebinarModal";
import CreateWebinarModal from "../WebinarAdminCreateWebinarTab/CreateWebinarModal";

function WebinarAdminWebinarListTab({ title, id }) {
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
      invoiceNumber: 234567456,
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
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const toggleContentVisibility = () => {
    setContentVisible(!isContentVisible);
  };

  function handleDeleteModal() {
    setDeleteModal(true);
  }
  function handleUpdateModalOpen() {
    setUpdateModal(true);
  }
  return (
    <div
      className={`ir-ws-webinar-list-tab ${!isContentVisible ? "active" : ""}`}
    >
      <div className="ir-ws-admin-webinar-content">
        <p className="ir-ws-webinar-title-text">{title}</p>
        <div className="ir-ws-admin-list-button-container">
          {webinarlistTab.map((item, index) => (
            <div key={index}>
              {item === "Cancel" ? (
                <button
                  className="ir-ws-webinar-cancel-button"
                  onClick={handleDeleteModal}
                >
                  {item}
                </button>
              ) : item === "Update" ? (
                <button
                  className="ir-ws-webinar-update-button"
                  onClick={handleUpdateModalOpen}
                >
                  {item}
                </button>
              ) : item === "Transaction" ? (
                <button
                  className={`ir-ws-webinar-transaction-button ${
                    isContentVisible
                      ? "ir-ws-webinar-transaction-button-active"
                      : ""
                  }`}
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
          <ul className="ir-ws-webinar-list-accordian-tab">
            {accordianListButton.map((item, index) => (
              <li className="ir-ws-list-item-box" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <div>
            {webinarData.map((item, index) => (
              <ul className="ir-ws-webinar-list-data" key={index}>
                <li>{item.userName}</li>
                <li>{item.timeDate}</li>
                <li>{item.transaction}</li>
                <li>{item.invoiceNumber}</li>
                <li>
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
                </li>
              </ul>
            ))}
          </div>
        </div>
      )}
      {deleteModal && (
        <DeleteWebinarModal
          id={id}
          deleteModal={deleteModal}
          setDeleteModal={setDeleteModal}
        />
      )}
      {updateModal && (
        <CreateWebinarModal
          id={id}
          type="Update Webinar"
          updateModal={updateModal}
          setUpdateModal={setUpdateModal}
        />
      )}
    </div>
  );
}

export default WebinarAdminWebinarListTab;
