import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import SidebarOption from "./SidebarOption";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import AppsIcon from "@material-ui/icons/Apps";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import DraftsIcon from "@material-ui/icons/Drafts";
import InboxIcon from "@material-ui/icons/Inbox";
import AddIcon from "@material-ui/icons/Add";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../Firebase";

function SideBar() {
  const [channel, loading, error] = useCollection(db.collection("rooms"));

  return (
    <SideBarContainer>
      <SideBarHeading>
        <h2>Slack Name</h2>
        <h3>
          <FiberManualRecordIcon />
          Udit Takkar
        </h3>
      </SideBarHeading>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions and reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People and user group" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
      {channel?.docs.map((doc) => {
        return (
          <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
        );
      })}
    </SideBarContainer>
  );
}

export default SideBar;

const SideBarContainer = styled.div`
  display: flex;
  flex: 0.25;
  background-color: #3f0f40;
  color: white;
  border-top: 1px solid gray;
  flex-direction: column;
  max-width: 260px;
  > hr {
    width: 100%;
  }
`;
const SideBarHeading = styled.div`
  align-items: center;
  > h2 {
    margin-top: 10px;
    margin-bottom: 0px;
  }
  > h3 {
    display: flex;
    color: white;

    margin-top: 5px;
    font-size: 15px;
    font-weight: lighter;
    > .MuiSvgIcon-root {
      height: 15px;
    }
  }
`;
