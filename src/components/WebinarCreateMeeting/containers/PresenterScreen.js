import {
  AudioInputControl,
  ContentShareControl,
  LocalVideo,
  VideoInputControl,
  useLocalVideo,
  useMeetingManager,
} from "amazon-chime-sdk-component-library-react";
import "./PresenterScreen.scss";
import { useEffect } from "react";
import axios from "axios";
import { MeetingSessionConfiguration } from "amazon-chime-sdk-js";
function PresenterScreen() {
  const url =
    "http://bd-webinarservice-lb-staging-958852351.us-east-1.elb.amazonaws.com/api/v1/meetings/create";
  const bearerToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTk5NzUwOTYsIlVzZXJuYW1lIjoiYWRtaW4iLCJSb2xlIjpbImFkbWluIiwidXNlciJdfQ.HWYywWY5yOUNTZtSZhdD2-zDmqamp2msSoPmmNJw9mM";
  const participantsData = [
    { participants: "participants", occupations: "occupations" },
    { participants: "participants", occupations: "occupations" },
    { participants: "participants", occupations: "occupations" },
    { participants: "participants", occupations: "occupations" },
    { participants: "participants", occupations: "occupations" },
    { participants: "participants", occupations: "occupations" },
    { participants: "participants", occupations: "occupations" },
    { participants: "participants", occupations: "occupations" },
    { participants: "participants", occupations: "occupations" },
    { participants: "participants", occupations: "occupations" },
    { participants: "participants", occupations: "occupations" },
    { participants: "participants", occupations: "occupations" },
  ];
  const meetingManager = useMeetingManager();
  const { isVideoEnabled } = useLocalVideo();

  useEffect(
    function () {
      async function fetchMeetingData() {
        try {
          const response = await axios.post(
            url,
            {},
            {
              headers: {
                Authorization: `Bearer ${bearerToken}`,
                "Content-Type": "application/json", // Set the Content-Type header if needed
              },
            }
          );
          console.log(response);
          const hostAttendeeDetails = response.data.hostAttendeeDetails;
          // delete the meeting ID which is present in the host attendee details
          // delete hostAttendeeDetails.meetingId;
          const meetingDetails = response.data.meetingDetails;
          // setAttendeeId(response.data.hostAttendeeDetails.attendeeId);
          const meetingSessionConfiguration = new MeetingSessionConfiguration(
            meetingDetails,
            hostAttendeeDetails
          );
          await meetingManager.join(meetingSessionConfiguration);
          await meetingManager.start();
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }
      fetchMeetingData();
    },
    [meetingManager]
  );
  return (
    <div>
      <div className="ir-ws-webinar-presenter-header">
        <img
          src={require("../../../assets/images/ir4u4.png")}
          alt="logo"
          className="ir-ws-webinar-presenter-logo"
        />
        <div className="ir-ws-webinar-presenter-logo-pack">
          <p>Poll</p>
          <span>
            <img
              src={require("../../../assets/images/poll.png")}
              alt="poll-logo"
              className="ir-ws-webinar-presenter-poll-logo"
            />
          </span>
          <p>Docs</p>
          <span>
            <img
              src={require("../../../assets/images/docs.png")}
              alt="poll-logo"
              className="ir-ws-webinar-presenter-docs-logo"
            />
          </span>
          <p>Recorder</p>
          <span>
            <img
              src={require("../../../assets/images/record.png")}
              alt="poll-logo"
              className="ir-ws-webinar-presenter-recorder-logo"
            />
          </span>
        </div>
      </div>
      <div className="ir-ws-webinar-presenter-main-screen-container">
        <div className="ir-ws-webinar-presenter-participants-box">
          <div className="ir-ws-webinar-presenter-participants-number-container">
            <p>Participants</p>
            <p>123</p>
          </div>
          <div className="ir-ws-webinar-presenter-participants-container">
            {participantsData.map((item, index) => (
              <div
                className="ir-ws-webinar-participants-occupations-container"
                key={index}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ir-ws-webinar-participants-user-logo"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="ir-ws-webinar-participants-text">
                    {item.participants}
                  </p>
                  <p className="ir-ws-webinar-occupations-text">
                    {item.occupations}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          {isVideoEnabled ? (
            <LocalVideo
              style={{
                width: "800px",
                height: "500px",
                borderRadius: "15px",
              }}
            />
          ) : (
            <div className="ir-ws-webinar-presenter-meeting-screen"></div>
          )}

          <div className="ir-ws-webinar-presenter-meeting-control-container">
            <div className="ir-ws-webinar-presenter-meeting-control">
              <AudioInputControl />
              <VideoInputControl />
              <ContentShareControl />
            </div>
            <button className="ir-ws-webinar-presenter-meeting-leave-btn">
              Leave
            </button>
          </div>
        </div>
        <div className="ir-ws-webinar-presenter-message-notes-container">
          <div className="ir-ws-webinar-presenter-notes-container">
            <div className="ir-ws-webinar-presenter-notes-text-box">
              <p className="ir-ws-webinar-presenter-notes-text">Notes</p>
            </div>
            <textarea
              type="text"
              className="ir-ws-webinar-presenter-note-input-box"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PresenterScreen;
