import "./WebinarCreateMeeting.scss";
import {
  LocalVideo,
  useLocalVideo,
  ContentShare,
  useContentShareControls,
} from "amazon-chime-sdk-component-library-react";

const Chime = ({ videoTiles }) => {
  const { toggleVideo } = useLocalVideo();
  const { toggleContentShare } = useContentShareControls();

  const buttonClick = () => {
    console.log("button");
    toggleVideo();
  };

  return (
    <>
      {videoTiles && (
        <>
          <button onClick={buttonClick}>Toggle video</button>
          <button onClick={toggleContentShare}>ScreenShare</button>
          <div
            style={{
              margin: "20px auto",
              marginBottom: "20px",
              width: "830px",
              height: "450px",
            }}
          >
            {videoTiles && <LocalVideo nameplate="me" id="localvideo" />}

            <ContentShare />
          </div>
        </>
      )}
    </>
  );
};

export default Chime;
