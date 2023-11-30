import styled from "styled-components";
import { Logo, Home, Plus, Notice, MyPost, MyEdit, Heart } from "../assets";

const SidebarPage = () => {
  return (
    <Container>
      <Sidebar>
        <LogoWrapper>
          <LogoImg src={Logo} alt="로고" />
          <Ment>원하는 사진을 올리고 웃긴 사진을 만들어보세요!</Ment>
        </LogoWrapper>
        <Wrapper>
          <IconWrapper>
            <PageLogo src={Home} alt="홈 아이콘" />
            <Name>집으로 돌아가기</Name>
          </IconWrapper>
          <IconWrapper>
            <PageLogo src={Plus} alt="추가 아이콘" />
            <Name>사진 들이밀기</Name>
          </IconWrapper>
          <IconWrapper>
            <PageLogo src={Notice} alt="공지 아이콘" />
            <Name>통보</Name>
          </IconWrapper>
          <IconWrapper>
            <PageLogo src={MyPost} alt="내 게시물 아이콘" />
            <Name>나의 게시물</Name>
          </IconWrapper>
          <IconWrapper>
            <PageLogo src={MyEdit} alt="내 합성작 아이콘" />
            <Name>나의 합성작품</Name>
          </IconWrapper>
          <IconWrapper>
            <PageLogo src={Heart} alt="좋아요 아이콘" />
            <Name>흡족스러움</Name>
          </IconWrapper>
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
