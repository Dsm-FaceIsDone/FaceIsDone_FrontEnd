import React from "react";
import styled from "styled-components";
import { ReactComponent as LeftArrow } from "../assets/img/LeftArrow.svg";
import { ReactComponent as SmallProfile } from "../assets/img/SmallProfile.svg";

export default function NewCreatePostLast() {
  return (
    <>
      <Container>
        <Header>
          <LeftArrow />
          <HeaderText>새 게시물 만들기</HeaderText>
          <HeaderText>공유하기</HeaderText>
        </Header>
        <Line />
        <Contents>
          <Img></Img>
          <InputBox>
            <User>
              <SmallProfile />
              <NickName>모시깽이</NickName>
              <UserId>hyunmin_jo</UserId>
            </User>
            <WriteText placeholder="문구를 입력하세요.."></WriteText>
          </InputBox>
        </Contents>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 800px;
  height: 520px;
  border-radius: 20px;
  border: 1px solid #000;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 10px;
`;

const HeaderText = styled.p`
  font-family: Inter;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  margin: 10px 0px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #000;
`;

const Contents = styled.div`
  width: 100%;
  height: 475px;
  display: flex;
  justify-content: space-between;
`;

const Img = styled.div`
  width: 60%;
  height: 100%;
  background-color: gray;
  z-index: -1;
  overflow: hidden;
`;

const InputBox = styled.div`
  width: 40%;
  height: 100%;
  padding: 10px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px 20px;
`;

const NickName = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 0px 5px 0px 10px;
`;

const UserId = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 22px;
`;

const WriteText = styled.textarea`
  width: 100%;
  height: 380px;
  color: #737373;
  font-family: Inter;
  font-size: 14px;
  border: none;
  resize: none;
`;
