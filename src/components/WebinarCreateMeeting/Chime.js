import "./WebinarCreateMeeting.scss";
import {
  LocalVideo,
  ContentShare,
  AudioInputControl,
  VideoInputControl,
  ContentShareControl,
} from "amazon-chime-sdk-component-library-react";

const Chime = ({ videoTiles, attendeeId }) => {
  return (
    <>
      {videoTiles && (
        <>
          <div
            style={{
              margin: "20px auto",
              marginBottom: "20px",
              width: "830px",
              height: "450px",
            }}
          >
            {videoTiles && (
              <>
                <LocalVideo nameplate="me" id="localvideo" />
                <div className="ir-ws-audioVideo-control">
                  <AudioInputControl />
                  <VideoInputControl />
                  <ContentShareControl />
                </div>
              </>
            )}

            <ContentShare />
          </div>
        </>
      )}
    </>
  );
};

export default Chime;
