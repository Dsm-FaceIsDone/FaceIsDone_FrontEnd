import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/img/Arrow.svg";
import { BackGround, Face } from "../../assets";

function ChooseImgPage() {
  return (
    <Container>
      <BackImg src={BackGround} />
      <ChooseImgWrapper>
        <Text>프로필 이미지를 설정해주세요.</Text>
        <PhotoWrapper>
          <ProfileImg>
            <p>프로필 사진</p>
          </ProfileImg>
          <Rignt>
            <StartWrapper>
              <div>
                <Start>
                  <StartText>기본 이미지 프로필로 시작하기</StartText>
                  <Arrow />
                </Start>
                <Line></Line>
              </div>
              <div>
                <Start>
                  <StartText>프로필 사진 업로드 하기</StartText>
                  <Arrow />
                </Start>
                <Line></Line>
              </div>
            </StartWrapper>
            <FaceImg src={Face} alt="얼다" />
            <UploadButton>
              <User>
                <Name>모시깽이</Name>
                <Id>hyunmin_jo</Id>
              </User>
              <Ment>사진이 업로드 되었다면? 로그인 하러가기</Ment>
            </UploadButton>
          </Rignt>
        </PhotoWrapper>
      </ChooseImgWrapper>
    </Container>
  );
}

const Container = styled.div``;

const BackImg = styled.img`
  position: relative;
  width: 100%;
  height: 907px;
`;

const ChooseImgWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 85px;
  width: 1000px;
  height: 650px;
  background-color: #ffffff;
  border-radius: 20px;
  top: 180px;
  left: 460px;
`;

const Text = styled.p`
  font-size: 35px;
  font-weight: 400;
`;

const PhotoWrapper = styled.div`
  display: flex;
  gap: 57px;
`;

const Rignt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 270px;
`;

const ProfileImg = styled.div`
  width: 400px;
  height: 400px;
  background-color: #eeeeee;
  > p {
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StartText = styled.p`
  width: 230px;
  font-size: 17px;
  font-weight: 400;
`;

const Line = styled.div`
  width: 375px;
  height: 3px;
  background-color: black;
`;

const Start = styled.div`
  display: flex;
  gap: 130px;
`;

const FaceImg = styled.img`
  position: absolute;
  width: 32px;
  height: 36px;
  top: 530px;
  left: 880px;
`;

const UploadButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const User = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-left: 160px;
`;

const Id = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
`;

const Ment = styled.p`
  color: #818181;
  text-align: right;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2.8px;
`;

export default ChooseImgPage;
