import styled from "styled-components";
import {
  Logo,
  Home,
  Plus,
  Notice,
  MyPost,
  MyEdit,
  Heart,
  Logout,
} from "../assets";

const SidebarPage = () => {
  const bar = [
    { logo: Home, name: "집으로 돌아가기" },
    { logo: Plus, name: "사진 들이밀기" },
    { logo: Notice, name: "통보" },
    { logo: MyPost, name: "나의 게시물" },
    { logo: MyEdit, name: "나의 합성작품" },
    { logo: Heart, name: "흡족스러움" },
    { logo: Logout, name: "로그아웃" },
  ];
  return (
    <Container>
      <Sidebar>
        <LogoWrapper>
          <LogoImg src={Logo} alt="로고" />
          <Ment>원하는 사진을 올리고 웃긴 사진을 만들어보세요!</Ment>
        </LogoWrapper>
        <Wrapper>
          {bar.map((element) => (
            <IconWrapper key={element.logo}>
              <PageLogo src={element.logo} />
              <Name>{element.name}</Name>
            </IconWrapper>
          ))}
        </Wrapper>
      </Sidebar>
    </Container>
  );
};

const Container = styled.div``;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 75px;
  width: 580px;
  height: 923px;
  padding-top: 75px;
  border-width: 0px 2px 0px 0px;
  border-style: solid;
  border-color: #dbdbdb;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 90px;
`;

const LogoImg = styled.img`
  width: 205px;
  height: 45px;
`;

const Ment = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #6d6d6d;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const IconWrapper = styled.div`
  display: flex;
`;

const PageLogo = styled.img`
  width: 42px;
  height: 45px;
  padding: 8px;
`;

const Name = styled.p`
  font-size: 25px;
  font-weight: 400;
  color: black;
  padding: 10px;
`;

export default SidebarPage;
