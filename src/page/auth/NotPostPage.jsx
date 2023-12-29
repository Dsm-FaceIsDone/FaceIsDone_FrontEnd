import styled from "styled-components";
import Sidebar from "../../components/Sidebar";
import MyProfile from "../../components/MyProfile";

const NotpostPage = () => {
  return (
    <Container>
      <Sidebar />
      <Center></Center>
      <MyProfile />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Center = styled.div`
  width: 780px;
  height: 923px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default NotpostPage;
