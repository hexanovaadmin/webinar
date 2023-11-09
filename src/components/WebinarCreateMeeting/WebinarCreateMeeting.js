import "./WebinarCreateMeeting.scss";
import axios from "axios";
import {
  VideoTileGrid,
  useMeetingManager,
} from "amazon-chime-sdk-component-library-react";
import { MeetingSessionConfiguration } from "amazon-chime-sdk-js";
import { useState } from "react";

const WebinarCreateMeeting = () => {
  const meetingManager = useMeetingManager();
  const [meeting, setMeeting] = useState(false);

  const joinMeeting = async () => {
    try {
      const hostAttendeeDetails = {
        meetingId: "",
        attendeeId: "21b0255f-9468-c28b-9d70-1ae0aaa01b5d",
        capabilities: {
          audio: "Send",
          content: "Send",
          video: "Send",
        },
        externalUserId: "ir4u-user-id-538873fa-47a5-4ada-b0b2-5a4b26eaac2f",
        joinToken:
          "MjFiMDI1NWYtOTQ2OC1jMjhiLTlkNzAtMWFlMGFhYTAxYjVkOmRiNjFmZDc2LTMwYzItNDBjMS05NDAwLTE4MzRlNDU1N2NhMA",
      };
      const meetingDetails = {
        externalMeetingId:
          "ir4u-external-meet-id-eab9d322-23d1-471a-b8a0-d8c3e88e86f3",
        mediaPlacement: {
          audioFallbackUrl:
            "wss://haxrp.m2.ue1.app.chime.aws:443/calls/43992a27-0652-4428-b0ab-6c0af9922713",
          audioHostUrl:
            "9a6d2ccf2018cd7dc989a4be07ce0e74.k.m2.ue1.app.chime.aws:3478",
          eventIngestionUrl:
            "https://data.svc.ue1.ingest.chime.aws/v1/client-events",
          screenDataUrl:
            "wss://bitpw.m2.ue1.app.chime.aws:443/v2/screen/43992a27-0652-4428-b0ab-6c0af9922713",
          screenSharingUrl:
            "wss://bitpw.m2.ue1.app.chime.aws:443/v2/screen/43992a27-0652-4428-b0ab-6c0af9922713",
          screenViewingUrl:
            "wss://bitpw.m2.ue1.app.chime.aws:443/ws/connect?passcode=null&viewer_uuid=null&X-BitHub-Call-Id=43992a27-0652-4428-b0ab-6c0af9922713",
          signalingUrl:
            "wss://signal.m2.ue1.app.chime.aws/control/43992a27-0652-4428-b0ab-6c0af9922713",
          turnControlUrl:
            "https://2713.cell.us-east-1.meetings.chime.aws/v2/turn_sessions",
        },
        mediaRegion: "us-east-1",
        meetingArn:
          "arn:aws:chime:us-east-1:077919032406:meeting/43992a27-0652-4428-b0ab-6c0af9922713",
        meetingFeatures: {
          audio: {
            echoReduction: "UNAVAILABLE",
          },
        },
        meetingHostId: "ir4u-host-bec10182-8ac8-4a73-96f3-8f97dec83b8b",
        meetingId: "43992a27-0652-4428-b0ab-6c0af9922713",
        primaryMeetingId: "",
        tenantIds: null,
      };
      const meetingSessionConfiguration = new MeetingSessionConfiguration(
        meetingDetails,
        hostAttendeeDetails
      );

      await meetingManager.join(meetingSessionConfiguration);
      await meetingManager.start();
      setMeeting(true);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <div className="ir-ws-webinar-meeting-container">
        <button onClick={joinMeeting}>Join</button>
      </div>
      <div>{meeting && <VideoTileGrid />}</div>
    </>
  );
};

export default WebinarCreateMeeting;
