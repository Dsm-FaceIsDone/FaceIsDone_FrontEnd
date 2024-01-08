import { Main, Face } from "../../assets";
import styled from "styled-components";
import Input from "../../components/Input";

const LoginPage = () => {
  return (
    <Container>
      <MainImg src={Main} alt="메인" />
      <SignupWrapper>
        <Signup>로 그 인</Signup>
        <Wrapper>
          <IdWrapper>
            <Id>아 이 디</Id>
            <Input />
          </IdWrapper>
          <PwWrapper>
            <PassWord>비 밀 번 호</PassWord>
            <Input />
          </PwWrapper>
        </Wrapper>
      </SignupWrapper>
      <FaceImg src={Face} alt="얼다" />
      <SignupButton>
        <Button>서명 : 얼굴이 다했다 ( 인 )</Button>
        <Welcome>혹시, 계정이 있으십니까?</Welcome>
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

export default LoginPage;
