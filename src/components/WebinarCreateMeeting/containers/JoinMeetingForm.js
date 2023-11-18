import {
  AudioInputControl,
  LocalVideo,
  VideoInputControl,
} from "amazon-chime-sdk-component-library-react";
import { useState } from "react";
import "./JoinMeetingForm.scss";
import PresenterScreen from "./PresenterScreen";
import useJoinMeeting from "./useJoinMeeting";

function JoinMeetingForm() {
  const [name, setName] = useState("");
  const [presenterScreen, setPresenterScreen] = useState(false);

  const date = new Date();
  const formattedDate = date.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  function handleJoin() {
    if (!name) return;
    setPresenterScreen(true);
  }

  const { meetingManager, isVideoEnabled, videoTiles } = useJoinMeeting();
  const buttonStyle = {
    background: "#d5d5d5",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  };
  return (
    <>
      {!presenterScreen ? (
        <PresenterScreen />
      ) : (
        <div className="ir-ws-webinar-meeting-login-container">
          <div className="ir-ws-webinar-meeting-logo-container">
            <img
              src={require("../../../assets/images/ir4u4.png")}
              alt="logo"
              className="ir-ws-webinar-meeting-logo"
            />
          </div>
          <div className="ir-ws-webinar-meeting-preview-container">
            <p className="ir-ws-webnar-meeting-webinar-name">Webinar Name</p>
            <p className="ir-ws-webnar-meeting-webinar-time-date">
              {formattedDate}
            </p>
            <div className="ir-ws-webinar-meeting-video-tile-preview">
              {isVideoEnabled ? (
                <LocalVideo
                  style={{
                    width: "*0%",
                    height: "40vh",
                    borderRadius: "15px",
                  }}
                />
              ) : (
                <div
                  className="ir-ws-webinar-meeting-blank-video"
                  style={{
                    width: "90%",
                    height: "40vh",
                    borderRadius: "15px",
                    background: "#000000",
                  }}
                ></div>
              )}

              <div className="ir-ws-audioVideo-control">
                <AudioInputControl popOver={null} style={buttonStyle} />
                <VideoInputControl popOver={null} style={buttonStyle} />
              </div>
            </div>
            <div className="ir-ws-webinar-meeting-input-button-container">
              <p className="ir-ws-webinar-meeting-presenter-name">
                Presenter Name
              </p>
              <input
                className="ir-ws-webinar-meeting-presenter-name-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                className="ir-ws-webinar-meeting-join-button"
                onClick={handleJoin}
              >
                Join
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default JoinMeetingForm;
