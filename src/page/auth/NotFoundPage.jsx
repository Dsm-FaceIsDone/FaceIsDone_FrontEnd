import styled from "styled-components";
import { NotFound } from "../assets";

const NotFoundPage = () => {
  return (
    <Container>
      <NotFoundImg src={NotFound} alt="404" />
      <Ment>죄송합니다. 페이지를 찾을 수 없습니다.</Ment>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 923px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;

const NotFoundImg = styled.img`
  width: 200px;
  height: 200px;
`;

const Ment = styled.p`
  font-size: 30px;
  font-weight: 400;
  color: black;
`;

export default NotFoundPage;
