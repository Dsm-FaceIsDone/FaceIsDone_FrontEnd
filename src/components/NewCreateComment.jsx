import React from "react";
import styled from "styled-components";
import { ReactComponent as CreatePhoto } from "../assets/img/CreatePhoto.svg";

export default function NewCreateComment() {
  return (
    <>
      <Container>
        <Title>새 작품 올리기</Title>
        <Line />
        <Contents>
          <CreatePhoto />
          <Text>합성한 작품을 업로드 해주세요</Text>
        </Contents>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 450px;
  height: 520px;
  border-radius: 20px;
  border: 1px solid #000;
`;

const Title = styled.p`
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
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.p`
  font-family: Inter;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  margin: 20px;
`;
