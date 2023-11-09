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

const WebinarCreateMeeting = () => {
  const meetingManager = useMeetingManager();
  const { toggleVideo } = useLocalVideo();
  const { toggleContentShare } = useContentShareControls();

  // const [meeting, setMeeting] = useState(false);
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
      // setMeeting(true);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <div className="ir-ws-webinar-meeting-container">
        <button onClick={joinMeeting}>Join</button>
      </div>
      <div>
        <VideoTileGrid />
        <button onClick={toggleVideo}>Toggle video</button>
        <LocalVideo />
        <div className="preview-video-container">
          <PreviewVideo />
        </div>
      </div>
    </>
  );
};

export default WebinarCreateMeeting;
