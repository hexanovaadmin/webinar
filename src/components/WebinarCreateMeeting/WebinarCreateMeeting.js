import "./WebinarCreateMeeting.scss";
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
      const meetingDetails = {
        externalMeetingId:
          "ir4u-external-meet-id-7d662294-2ae9-4cba-985f-f44920b9abdd",
        mediaPlacement: {
          audioFallbackUrl:
            "wss://haxrp.m2.ue1.app.chime.aws:443/calls/5cbf74f4-6a2d-449f-a773-08836eb52713",
          audioHostUrl:
            "8469b5daaec55adf25a3ea8ccdcf5e22.k.m2.ue1.app.chime.aws:3478",
          eventIngestionUrl:
            "https://data.svc.ue1.ingest.chime.aws/v1/client-events",
          screenDataUrl:
            "wss://bitpw.m2.ue1.app.chime.aws:443/v2/screen/5cbf74f4-6a2d-449f-a773-08836eb52713",
          screenSharingUrl:
            "wss://bitpw.m2.ue1.app.chime.aws:443/v2/screen/5cbf74f4-6a2d-449f-a773-08836eb52713",
          screenViewingUrl:
            "wss://bitpw.m2.ue1.app.chime.aws:443/ws/connect?passcode=null&viewer_uuid=null&X-BitHub-Call-Id=5cbf74f4-6a2d-449f-a773-08836eb52713",
          signalingUrl:
            "wss://signal.m2.ue1.app.chime.aws/control/5cbf74f4-6a2d-449f-a773-08836eb52713",
          turnControlUrl:
            "https://2713.cell.us-east-1.meetings.chime.aws/v2/turn_sessions",
        },
        mediaRegion: "us-east-1",
        meetingArn:
          "arn:aws:chime:us-east-1:077919032406:meeting/5cbf74f4-6a2d-449f-a773-08836eb52713",
        meetingFeatures: {
          audio: {
            echoReduction: "UNAVAILABLE",
          },
        },
        meetingHostId: "ir4u-host-d9a8a345-f28b-4f22-a42b-cb081375590b",
        meetingId: "5cbf74f4-6a2d-449f-a773-08836eb52713",
        primaryMeetingId: "",
        tenantIds: null,
      };
      const hostAttendeeDetails = {
        attendeeId: "16adb4a6-248b-6b27-8128-181a223c57b7",
        capabilities: {
          audio: "Send",
          content: "Send",
          video: "Send",
        },
        externalUserId: "ir4u-user-id-9a087631-3454-4bdc-97e4-ff235c7e7067",
        joinToken:
          "MTZhZGI0YTYtMjQ4Yi02YjI3LTgxMjgtMTgxYTIyM2M1N2I3OjhjYWMwMDJkLTZmOTAtNGNkYi05Y2I0LTY2NjhjZTBmZGVjNA",
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
