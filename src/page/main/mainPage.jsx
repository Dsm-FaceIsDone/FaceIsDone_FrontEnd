import React from "react";
import styled from "styled-components";
import SideBar from "../../components/Sidebar";
import Post from "../../components/Post";
import MyProfile from "../../components/MyProfile";

export default function mainPage() {
  return (
    <>
      <Container>
        <SideBar />
        <PostBox>
          <Post />
          <Post />
        </PostBox>
        <MyProfile />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
`;

const PostBox = styled.div`
  display: flex;
  flex-direction: column;
`;
