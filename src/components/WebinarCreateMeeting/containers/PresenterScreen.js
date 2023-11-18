import {
  AudioInputControl,
  ChatBubble,
  ContentShare,
  ContentShareControl,
  LocalVideo,
  MessageAttachment,
  VideoInputControl,
} from "amazon-chime-sdk-component-library-react";
import "./PresenterScreen.scss";
import { useEffect, useRef } from "react";
import { useState } from "react";
import useJoinMeeting from "./useJoinMeeting";
function PresenterScreen() {
  const participantsData = [
    { participants: "Participants", occupations: "Occupations" },
    { participants: "Participants", occupations: "Occupations" },
    { participants: "Participants", occupations: "Occupations" },
    { participants: "Participants", occupations: "Occupations" },
    { participants: "Participants", occupations: "Occupations" },
    { participants: "Participants", occupations: "Occupations" },
    { participants: "Participants", occupations: "Occupations" },
    { participants: "Participants", occupations: "Occupations" },
    { participants: "Participants", occupations: "Occupations" },
    { participants: "Participants", occupations: "Occupations" },
    { participants: "Participants", occupations: "Occupations" },
    { participants: "Participants", occupations: "Occupations" },
  ];

  const { isVideoEnabled, meetingManager, isLocalUserSharing } =
    useJoinMeeting();

  const [inputText, setInputText] = useState("");

  const initialMessages = [
    {
      id: 123456789,
      variant: "incoming",
      senderName: "Jim Halpert",
      time: "9:47 AM",
      content: "I've always been your biggest flan.",
    },
    {
      id: 48927289,
      variant: "incoming",
      senderName: "Ryan Howard",
      time: "9:45 AM",
      content: "You should have put him in custardy.",
    },
    {
      id: 5387972,
      variant: "incoming",
      senderName: "Fred Miller",
      content: "This is an outgoing message with attachment",
      time: "9:57 AM",
      // attachment: {
      //   name: "Report.pdf",
      //   size: "23.3KB",
      //   downloadUrl: "https://test.com/download/Report.pdf",
      // },
    },
  ];
  const [messages, setMessage] = useState(initialMessages);
  function handleMessageSend() {
    if (!inputText) return;
    const newOutgoingMessage = {
      id: crypto.randomUUID(),
      variant: "outgoing",
      senderName: "Sunny",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      content: inputText,
    };
    setMessage([...messages, newOutgoingMessage]);
    setInputText("");
  }
  const messageBoxRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  };

  const buttonStyle = {
    background: "#2BA7FF",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  };

  return (
    <div className="ir-ws-webinar-presenter-main-container">
      <div className="ir-ws-webinar-presenter-header">
        <img
          src={require("../../../assets/images/ir4u4.png")}
          alt="logo"
          className="ir-ws-webinar-presenter-logo"
        />
        <p className="ir-ws-webinar-presenter-webinar-name-text">
          Webinar Name
        </p>
        <div className="ir-ws-webinar-presenter-logo-pack">
          <p className="ir-ws-webinar-presenter-recording-text">Recording</p>

          <div className="ir-ws-webinar-presenter-recorder-logo">
            <div className="ir-ws-webinar-presenter-recoredr-logo-red-btn"></div>
          </div>
        </div>
      </div>
      <div className="ir-ws-webinar-presenter-main-screen-container">
        <div className="ir-ws-webinar-presenter-participants-box">
          <div className="ir-ws-webinar-presenter-participants-number-container">
            <p className="ir-ws-webinar-presenter-text">Participants</p>
            <p className="ir-ws-webinar-presenter-number-text">123</p>
          </div>
          <div className="ir-ws-webinar-presenter-participants-container">
            {participantsData.map((item, index) => (
              <div
                className="ir-ws-webinar-participants-occupations-container"
                key={index}
              >
                <div className="ir-ws-webinar-participants-user-logo">
                  <p></p>
                </div>
                <div>
                  <p className="ir-ws-webinar-participants-text">
                    {item.participants}
                  </p>
                  <p className="ir-ws-webinar-occupations-text">
                    {item.occupations}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="ir-ws-webinar-presenter-meeting-container">
          {isVideoEnabled ? (
            <LocalVideo
              style={{
                width: "100%",
                height: "60vh",
                borderRadius: "15px",
              }}
            />
          ) : (
            <div className="ir-ws-webinar-presenter-meeting-screen"></div>
          )}
          {/* <ContentShare
            style={{
              width: "800px",
              height: "500px",
              borderRadius: "15px",
            }}
          /> */}
          <div className="ir-ws-webinar-presenter-meeting-control-container">
            <div className="ir-ws-webinar-presenter-meeting-control">
              <VideoInputControl popOver={null} style={buttonStyle} />
              <AudioInputControl popOver={null} style={buttonStyle} />
              <ContentShareControl style={buttonStyle} />
            </div>
            <button className="ir-ws-webinar-presenter-meeting-leave-btn">
              Leave
            </button>
          </div>
        </div>
        <div className="ir-ws-webinar-presenter-message-notes-container">
          <div className="ir-ws-webinar-presenter-notes-container">
            <div className="ir-ws-webinar-presenter-notes-text-box">
              <p className="ir-ws-webinar-presenter-notes-text">Notes</p>
            </div>
            <textarea
              type="text"
              placeholder="Type here"
              className="ir-ws-webinar-presenter-note-input-box"
            />
          </div>

          <div className="ir-ws-webinar-presenter-message-conatiner">
            <div className="ir-ws-webinar-presenter-chat-text-box">
              <p className="ir-ws-webinar-presenter-chat-text">Chat</p>
            </div>
            <div
              className="ir-ws-webinar-presenter-message-box"
              ref={messageBoxRef}
            >
              {messages.map((message, index) =>
                message.variant === "outgoing" ? (
                  <div className="ir-ws-webinar-presenter-message-sender-reciever-box">
                    <div
                      key={message.id}
                      className="ir-ws-webinar-sender-message"
                    >
                      <ChatBubble
                        variant={message.variant}
                        senderName={message.senderName}
                        time={message.time}
                        style={{
                          borderRadius: "15px",
                          fontSize: "12px",
                          lineHeight: "1.2",
                          padding: "8px",
                          background: "#85CCFF",
                          color: "#000",
                        }}
                      >
                        {message.content}
                        {message.attachment && (
                          <MessageAttachment
                            name={message.attachment.name}
                            size={message.attachment.size}
                            downloadUrl={message.attachment.downloadUrl}
                          />
                        )}
                      </ChatBubble>
                    </div>
                  </div>
                ) : (
                  <div className="ir-ws-webinar-presenter-message-receiver-box">
                    <div className="ir-ws-webinar-presenter-message-sender">
                      <p className="ir-ws-webinar-presenter-message-name">MK</p>
                    </div>
                    <ChatBubble
                      variant={message.variant}
                      senderName={message.senderName}
                      time={message.time}
                      key={message.id}
                      style={{
                        color: "#000",
                        borderRadius: "15px",
                        background: "#85CCFF",
                        fontSize: "12px",
                        lineHeight: "1.2",
                        padding: "8px",
                      }}
                    >
                      {message.content}
                      {message.attachment && (
                        <MessageAttachment
                          name={message.attachment.name}
                          size={message.attachment.size}
                          downloadUrl={message.attachment.downloadUrl}
                          style={{
                            borderRadius: "10px",
                            padding: "3px",
                            fontSize: "12px",
                            lineHeight: "1.2",
                          }}
                        />
                      )}
                    </ChatBubble>
                  </div>
                )
              )}
            </div>
            <div className="ir-ws-webinar-presenter-message-input-container">
              <div className="ir-ws-webinar-presenter-message-input-send-btn-container">
                <textarea
                  placeholder="Type message here"
                  className="ir-ws-webinar-presenter-message-input"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleMessageSend();
                    }
                  }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ir-ws-webinar-message-send-btn"
                  onClick={handleMessageSend}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PresenterScreen;
