import { Main, Face } from "../../assets";
import styled from "styled-components";
import Input from "../../components/Input";

const SignupPage = () => {
  return (
    <Container>
      <MainImg src={Main} alt="메인" />
      <SignupWrapper>
        <Signup>회 원 가 입</Signup>
        <Wrapper>
          <IdWrapper>
            <Id>아 이 디</Id>
            <Input />
          </IdWrapper>
          <PwWrapper>
            <PassWord>비 밀 번 호</PassWord>
            <Input />
          </PwWrapper>
          <NicknameWrapper>
            <NickName>별 명</NickName>
            <Input />
          </NicknameWrapper>
        </Wrapper>
      </SignupWrapper>
      <FaceImg src={Face} alt="얼다" />
      <SignupButton>
        <Button>서명 : 얼굴이 다했다 ( 인 )</Button>
        <Welcome>얼굴이 다했다에 오신 모두들 환영합니다</Welcome>
      </SignupButton>
    </Container>
  );
};

const Container = styled.div``;

const MainImg = styled.img`
  position: relative;
  width: 100%;
  height: 907px;
`;

const SignupWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 75px;
  top: 200px;
  left: 850px;
`;

const Signup = styled.p`
  font-size: 35px;
`;

const IdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Id = styled.p`
  font-size: 20px;
`;

const PwWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PassWord = styled.p`
  font-size: 20px;
`;

const NicknameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NickName = styled.p`
  font-size: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
`;

const FaceImg = styled.img`
  position: absolute;
  top: 690px;
  left: 1653px;
`;

const SignupButton = styled.div`
  position: absolute;
  top: 700px;
  right: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: right;
`;

const Button = styled.p`
  font-size: 25px;
  letter-spacing: 7px;
`;

const Welcome = styled.p`
  font-size: 20px;
  color: #818181;
  letter-spacing: 7px;
`;

export default SignupPage;
