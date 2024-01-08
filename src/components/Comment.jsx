import React from "react";
import styled from "styled-components";
import { Johyunmin1 } from "../assets";
import { ReactComponent as Profile } from "../assets/img/Profile.svg";
import { ReactComponent as Setting } from "../assets/img/Setting.svg";

export default function Comment() {
  return (
    <>
      <Container>
        <PostContainer>
          <Header>
            <User>
              <Profile />
              <NickName>모시깽이</NickName>
              <UserId>hydunminjo</UserId>
            </User>
            <Setting />
          </Header>
          <Photo src={Johyunmin1}></Photo>
        </PostContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 780px;
  margin: 75px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 520px;
  gap: 18px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 7px 0px 0px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const NickName = styled.p`
  font-size: 22px;
  font-weight: 400;
  margin: 0px 5px 0px 15px;
`;

const UserId = styled.p`
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
`;

const Photo = styled.img`
  background-color: gray;
  width: 520px;
  height: 550px;
  border-radius: 16px;
`;
