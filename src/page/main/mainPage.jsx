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
        <Post />
        <MyProfile />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
