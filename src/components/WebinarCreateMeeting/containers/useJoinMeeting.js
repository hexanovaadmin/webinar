import { useEffect, useState } from "react";
import axios from "axios";
import { MeetingSessionConfiguration } from "amazon-chime-sdk-js";
import {
  useContentShareState,
  useLocalVideo,
  useMeetingManager,
} from "amazon-chime-sdk-component-library-react";

const useJoinMeeting = () => {
  const meetingManager = useMeetingManager();
  const [videoTiles, setVideoTiles] = useState(false);
  const { isVideoEnabled, toggleVideo } = useLocalVideo();
  const { isLocalUserSharing } = useContentShareState();
  const url =
    "http://bd-webinarservice-lb-staging-958852351.us-east-1.elb.amazonaws.com/api/v1/meetings/create";
  const bearerToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDAwNTU0MzEsIlVzZXJuYW1lIjoiYWRtaW4iLCJSb2xlIjpbImFkbWluIiwidXNlciJdfQ.I2Fmp2XR5Qd4-9Ojbi9Tn54vjhAnxfwiXS6LwRMILL0";

  useEffect(() => {
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
        setVideoTiles(true);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchMeetingData();
  }, [meetingManager]);

  return { meetingManager, isVideoEnabled, videoTiles, isLocalUserSharing };
};

export default useJoinMeeting;
