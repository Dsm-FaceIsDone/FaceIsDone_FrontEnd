import React from "react";
import styled from "styled-components";
import { Face } from "../assets";
import { ReactComponent as Work } from "../assets/img/Work.svg";

export default function UploadWord() {
  return (
    <>
      <Container>
        <BackGround>
          <SmallText>당신의 작품을 업로드 해보세요!</SmallText>
          <Upload>
            <UploadBtn>
              <Work />
              <UploadText>작품 등록하기</UploadText>
            </UploadBtn>
            <Logo src={Face} alt="얼굴도장" />
          </Upload>
        </BackGround>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 780px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  width: 520px;
  height: 95px;
  margin: 50px 0px;
  padding: 20px 30px;
  border-radius: 20px;
  background: #f1f1f1;
`;

const SmallText = styled.p`
  color: #6d6d6d;
  font-size: 15px;
`;

const Upload = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7px 0px 0px;
`;

const UploadBtn = styled.div`
  display: flex;
`;

const UploadText = styled.p`
  font-size: 20px;
  margin: -1px 5px;
`;

const Logo = styled.img`
margin: -10px;
`;
