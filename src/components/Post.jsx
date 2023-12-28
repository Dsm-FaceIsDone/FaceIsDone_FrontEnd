import React from "react";
import styled from "styled-components";
import { ReactComponent as Profile } from "../assets/img/Profile.svg";
import { ReactComponent as Setting } from "../assets/img/Setting.svg";
import { ReactComponent as Like } from "../assets/img/Like.svg";
import { ReactComponent as Letter } from "../assets/img/Letter.svg";

export default function Post() {
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
          <Content>
            <ContentText>이거 전데요, 합성좀 해주세요</ContentText>
            <Photo></Photo>
            <BtnContainer>
              <BtnBackGround>
                <Like />
                <BtnText>120개의 흡족함</BtnText>
              </BtnBackGround>
              <BtnBackGround>
                <Letter />
                <BtnText>1990개의 작품 보러가기</BtnText>
              </BtnBackGround>
            </BtnContainer>
          </Content>
        </PostContainer>
      </Container>
    </>
  );
}

const Container = styled.div``;

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

const Content = styled.div``;

const ContentText = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;

const Photo = styled.div`
  background-color: gray;
  width: 520px;
  height: 550px;
  margin: 10px 0px;
`;

const BtnContainer = styled.div`
  display: flex;
`;

const BtnBackGround = styled.div`
  border-radius: 10px;
  background: #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 0px 10px 0px 0px;
  width: auto;
  height: 25px;
`;

const BtnText = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin: 0px 7px;
`;
