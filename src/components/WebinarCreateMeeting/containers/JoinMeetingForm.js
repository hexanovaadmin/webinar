import {
  AudioInputControl,
  Camera,
  LocalVideo,
  PreviewVideo,
  VideoInputControl,
  useLocalVideo,
  useMeetingManager,
} from "amazon-chime-sdk-component-library-react";
import { MeetingSessionConfiguration } from "amazon-chime-sdk-js";
import axios from "axios";
import { useEffect, useState } from "react";
import "./JoinMeetingForm.scss";

function JoinMeetingForm() {
  const meetingManager = useMeetingManager();
  // const [videoTiles, setVideoTiles] = useState(false);
  const [name, setName] = useState("");
  const { isVideoEnabled } = useLocalVideo();

  const url =
    "http://bd-webinarservice-lb-staging-958852351.us-east-1.elb.amazonaws.com/api/v1/meetings/create";
  const bearerToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTk5MTI1ODcsIlVzZXJuYW1lIjoiYWRtaW4iLCJSb2xlIjpbImFkbWluIiwidXNlciJdfQ.xUzJaTRSj79i4_z9tw3dZtes8looH3zxULCNhg-caHw";
  const date = new Date();
  const formattedDate = date.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

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
          // setVideoTiles(true);
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }
      fetchMeetingData();
    },
    [meetingManager]
  );
  return (
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
              style={{ width: "560px", height: "360px", borderRadius: "15px" }}
            />
          ) : (
            <div
              style={{
                width: "560px",
                height: "360px",
                borderRadius: "15px",
                background: "#000000",
              }}
            ></div>
          )}
          {/* <LocalVideo
            style={{ width: "560px", height: "360px", borderRadius: "15px" }}
          /> */}
          <div className="ir-ws-audioVideo-control">
            <AudioInputControl />
            <VideoInputControl />
          </div>
        </div>
        <p className="ir-ws-webinar-meeting-presenter-name">Presenter Name</p>
        <input
          className="ir-ws-webinar-meeting-presenter-name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="ir-ws-webinar-meeting-join-button">Join</button>
      </div>
    </div>
  );
}

export default JoinMeetingForm;

// return (
//   <>
//     <img src={require("../../../assets/images/ir4u4.png")} alt="logo" />
//     <div
//     // className="ir-ws-webinar-meeting-video-tile"
//     // style={{
//     //   margin: "20px auto",
//     //   marginBottom: "20px",
//     //   width: "830px",
//     //   height: "450px",
//     // }}
//     >
//       <LocalVideo className="ir-ws-webinar-meeting-video-tile" />
//       <div className="ir-ws-audioVideo-control">
//         <AudioInputControl />
//         <VideoInputControl />
//       </div>
//     </div>
//   </>
// );
