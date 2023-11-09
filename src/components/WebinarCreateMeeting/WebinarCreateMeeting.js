import "./WebinarCreateMeeting.scss";
import axios from "axios";
import {
  VideoTileGrid,
  useMeetingManager,
  LocalVideo,
  useLocalVideo,
  PreviewVideo,
  useContentShareControls,
  ContentShare,
} from "amazon-chime-sdk-component-library-react";
import { MeetingSessionConfiguration } from "amazon-chime-sdk-js";
import { useState } from "react";
import Chime from "./Chime";

const WebinarCreateMeeting = () => {
  const meetingManager = useMeetingManager();

  const [videoTiles, setVideoTiles] = useState(false);

  const url =
    "http://bd-webinarservice-lb-staging-958852351.us-east-1.elb.amazonaws.com/api/v1/meetings/create";
  const bearerToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTk1NDczNjUsIlVzZXJuYW1lIjoiYWRtaW4iLCJSb2xlIjpbImFkbWluIiwidXNlciJdfQ.HaTyJJ3lj9UlQDUG79grwoWMDz9VZmOO-lKH15Qngeg";

  const joinMeeting = async () => {
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
      const meetingSessionConfiguration = new MeetingSessionConfiguration(
        meetingDetails,
        hostAttendeeDetails
      );
      // const requestData = {};
      await meetingManager.join(meetingSessionConfiguration);
      await meetingManager.start();
      setVideoTiles(true);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <div className="ir-ws-meeting-container">
        <button onClick={joinMeeting}>Join</button>
        <Chime videoTiles={videoTiles} />
      </div>
    </>
  );
};

export default WebinarCreateMeeting;
