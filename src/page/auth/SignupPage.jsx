import { useState } from "react";
import styled from "styled-components";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { Main, Face } from "../../assets";

/**
 * 
 * @return 회원가입
 */

export default function SignupPage () {
  
  const navigate = useNavigate("") 

  const [inputData, setInputData] = useState({
    userId : "",
    userPassword : "",
    nickName : ""
  })

  const {userId, userPassword, nickName} = inputData;

  const inputChange = (e) => {
    const {name, value} = e.target;
    setInputData({
      ...inputData,
      [name] : value
    })
  }

  const signUpClick = async() => {
    try{
      const response = await axios.post(
        `http://43.203.92.26:8080/user/signup`,
        {
          nickName,
          userId,
          userPassword
        }
      )
      navigate("/chooseImg")
      return response
    }
    catch(error) {
      alert(error.response.data.message)
    }
  }

  return (
    <Container>
      <MainImg src={Main} alt="메인" />
      <SignupWrapper>
        <Signup>회 원 가 입</Signup>
        <Wrapper>
          <IdWrapper>
            <Id>아 이 디</Id>
            <Input name="userId" value={userId} onChange={(e) => inputChange(e)}/>
          </IdWrapper>
          <PwWrapper>
            <PassWord>비 밀 번 호</PassWord>
            <Input type="password" name="userPassword" value={userPassword} onChange={(e) => inputChange(e)} />
          </PwWrapper>
          <NicknameWrapper>
            <NickName>별 명</NickName>
            <Input name="nickName" value={nickName} onChange={(e) => inputChange(e)}/>
          </NicknameWrapper>
        </Wrapper>
      </SignupWrapper>
      <FaceImg src={Face} alt="얼다" onClick={signUpClick}/>
      <SignupButton onClick={signUpClick}>
        <Button>서명 : 얼굴이 다했다 ( 인 )</Button>
        <Welcome>얼굴이 다했다에 오신 모두들 환영합니다</Welcome>
      </SignupButton>
    </Container>
  );
}

const Container = styled.div`
  width : 100%;
  height : 100%;
`;

const MainImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
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
`

