import React from "react";
import styled from "styled-components";
import SideBar from "../../components/Sidebar";
import Post from "../../components/Post";
import MyProfile from "../../components/MyProfile";
import UploadWork from "../../components/UploadWork";
import Comment from "../../components/Comment";

export default function SkeinPage() {
  return (
    <>
      <Container>
        <SideBar />
        <Center>
          <Post />
          <UploadWork />
          <Comment />
        </Center>
        <MyProfile />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
`;
