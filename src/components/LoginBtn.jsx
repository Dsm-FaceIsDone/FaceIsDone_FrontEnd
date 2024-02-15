import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import {Face} from "../assets"

/**
 * 
 * @returns 회원가입 로그인 버튼 컴포넌트
 */

export default function LoginBtn() {
    const navigate = useNavigate()
    
    const handleGoToLogin = (e) => {
        navigate("/login")
    }

    return (
        <>
        <Container onClick={handleGoToLogin}>
            <UploadBtn>
                <Name>모시깽이</Name>
                <Id>hyunmin_jo</Id>
                <FaceImg src={Face} alt="얼다도장" />
            </UploadBtn>
            <LoginMent>사진이 업로드 되었다면? 로그인 하러가기</LoginMent>
        </Container>
        </>
    )
}

const Container = styled.div``;

const UploadBtn = styled.div`
display: flex;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 0 7px 3px 50%;
`;

const Id = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
`;

const LoginMent = styled.p`
  color: #818181;
  text-align: right;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2.8px;
`;

const FaceImg = styled.img`
  position: absolute;
  width: 32px;
  height: 36px;
  bottom: 29%;
  right : 21.5%;
`;
