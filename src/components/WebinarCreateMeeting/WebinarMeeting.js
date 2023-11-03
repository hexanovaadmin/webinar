import {
  GlobalStyles,
  MeetingProvider,
  lightTheme,
} from "amazon-chime-sdk-component-library-react";
import { ThemeProvider } from "styled-components";
import WebinarCreateMeeting from "./WebinarCreateMeeting";

function WebinarMeeting() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <MeetingProvider>
        <WebinarCreateMeeting />
      </MeetingProvider>
    </ThemeProvider>
  );
}

export default WebinarMeeting;
