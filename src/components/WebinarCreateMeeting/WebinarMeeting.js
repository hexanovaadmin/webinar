import {
  GlobalStyles,
  MeetingProvider,
  lightTheme,
} from "amazon-chime-sdk-component-library-react";
import { ThemeProvider } from "styled-components";
import JoinMeetingForm from "./containers/JoinMeetingForm";

function WebinarMeeting() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <MeetingProvider>
        <JoinMeetingForm />
      </MeetingProvider>
    </ThemeProvider>
  );
}

export default WebinarMeeting;
