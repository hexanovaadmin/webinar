import "./WebinarAdminWebinarListTab.scss";
function WebinarAdminWebinarListTab() {
  const listTabButton = ["Cancel", "Update", "Transaction", "Transaction"];
  return (
    <div className="ir-ws-webinar-list-tab">
      <div className="ir-ws-admin-webinar-content">
        <p className="ir-ws-admin-webinar-name">Webinar Name</p>
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
      </div>
      <div className="ir-ws-admin-list-button-container">
        {listTabButton.map((item, index) => (
          <button>{item}</button>
        ))}
      </div>
    </div>
  );
}

export default WebinarAdminWebinarListTab;
