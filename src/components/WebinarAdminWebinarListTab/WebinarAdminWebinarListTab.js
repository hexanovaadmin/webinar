import React from "react";
import "./WebinarAdminWebinarListTab.scss";
import DeleteWebinarModal from "../WebinarAdminCreateWebinarTab/DeleteWebinarModal";
import CreateWebinarModal from "../WebinarAdminCreateWebinarTab/CreateWebinarModal";

import { useModalContext } from "../WebinarAdminCreateWebinarTab/ModalContext";

function WebinarAdminWebinarListTab({ title }) {
  const listTabButton = ["Cancel", "Update", "Transaction"];
  const [isContentVisible, setContentVisible] = React.useState(false);
  const { modalOpen, openModal, modalType, setModalType } = useModalContext();
  const handleCancelClick = () => {
    openModal();
    setModalType("delete"); // Set modal type to "delete" when "Cancel" is clicked
  };

  const handleUpdateClick = () => {
    openModal();
    setModalType("update"); // Set modal type to "update" when "Update" is clicked
  };
  return (
    <div
      className={`ir-ws-webinar-list-tab ${!isContentVisible ? "active" : ""}`}
    >
      <div className="ir-ws-admin-webinar-content">
        <p className="ir-ws-webinar-title-text">{title}</p>
        <div className="ir-ws-admin-list-button-container">
          {listTabButton.map((item, index) => (
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
                <button className="ir-ws-webinar-transaction-button">
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
      {/* {modalOpen && <CreateWebinarModal />}
      {modalOpen && <DeleteWebinarModal />} */}

      {modalOpen && modalType === "delete" && <DeleteWebinarModal />}
      {modalOpen && modalType === "update" && <CreateWebinarModal />}
    </div>
  );
}

export default WebinarAdminWebinarListTab;
