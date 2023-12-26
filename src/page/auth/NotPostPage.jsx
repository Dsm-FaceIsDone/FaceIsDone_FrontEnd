import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import MyProfile from "../components/MyProfile";
import { NoPost } from "../assets";

const NotpostPage = () => {
  return (
    <Container>
      <Sidebar />
      <Center>
        <Img src={NoPost} alt="게시물이 없습니다" />
      </Center>
      <MyProfile />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 275px;
  height: 278px;
`;

const Center = styled.div`
  width: 780px;
  height: 923px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default NotpostPage;
