import React from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import Header from "./Header";
import { selectRoomId } from "../features/appSlice";
import { useSelector } from "react-redux";
import ChatInput from "./ChatInput";

function Chat() {
  const roomId = useSelector(selectRoomId);
  //   const [messages];
  //   const [roomDetails];

  return (
    <ChatContainer>
      <ChatHeader>
        <HeaderLeft>
          <h4>#Room-Name</h4>
          <StarBorderOutlinedIcon />
        </HeaderLeft>
        <HeaderRight>
          <InfoOutlinedIcon />
          <h4>Details</h4>
        </HeaderRight>
      </ChatHeader>
      <ChatMessages></ChatMessages>
      <ChatInput channelId={roomId} />
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  max-width: calc(0.7+250px);
  overflow-y: scroll;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const ChatMessages = styled.div``;
