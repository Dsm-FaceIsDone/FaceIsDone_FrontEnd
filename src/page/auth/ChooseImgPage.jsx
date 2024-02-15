import {useState} from "react";
import styled from "styled-components";
import axios from "axios";
import { ReactComponent as Arrow } from "../../assets/img/Arrow.svg";
import BackGround from "../../assets/img/BackGround.png";
import NoImg from "../../assets/img/NoImg.png"
import LoginBtn from "../../components/LoginBtn";

export default function ChooseImgPage() {

  const [previewImg, setPreviewImg] = useState(NoImg);

  const basicImg = (e) => {
      if(previewImg) {
          setPreviewImg(NoImg)
      }
  }

  const insertImg = (e) => {
      const file = e.target.files[0]

      let reader = new FileReader()
      if(file) {
          reader.readAsDataURL(file);
      }

      reader.onloadend = () => {
          const previewImgUrl = reader.result
          if(previewImgUrl) {
              setPreviewImg(previewImgUrl)
          }
      }
  }

  const LoginClick = async() => {
    try {
      await axios.post(
        `http://43.203.92.26:8080/user/profileImage/{userId}`,
        {
          image : previewImg
        }
      )
      console.log(previewImg)
    } catch(error) {
      alert(error.response.data.message)
    }
  }
  


  return (
  <Container>
    <Container>
      <ChooseImgWrapper>
        <Title>프로필 이미지를 설정해주세요</Title>
        
          <ProfileSetting>

            <Img src={previewImg} />

            <Setting>
              <PhotoSelect>
                <Label onClick={(e) => basicImg(e)}>
                  <div>기본 이미지 프로필로 변경하기</div>
                  <Arrow/>
                  </Label>
                <Label htmlFor="file">
                    <div>프로필 사진 업로드하기</div>
                    <Arrow/>
                </Label>
                <Input type="file" name="file" accept="image/*" onChange={(e) => insertImg(e)}/>
                </PhotoSelect>
                <LoginBtn onClick={LoginClick}/>
            </Setting>
            
          </ProfileSetting>

      </ChooseImgWrapper>
    </Container>
  </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackGround});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ChooseImgWrapper = styled.div`
  width: 1000px;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  background-color: #ffffff;
  border-radius: 20px;
  margin: auto;
`;

const Title = styled.p`
  font-size: 35px;
  font-weight: 400;
`;

const ProfileSetting = styled.div`
width: 845px;
height: 400px;
display: flex;
justify-content: space-between;
`

const Img = styled.img`
width: 400px;
height: 400px;
`

const Setting = styled.div`
  display: flex;
  flex-direction: column;
  gap: 250px;
`;

const PhotoSelect = styled.div``

const Label = styled.label`
display: flex;
justify-content: space-between;
width: 375px;
padding: 0 10px 0 0;
border-bottom: solid 3px black;
margin-bottom: 25px;
font-size: 17px;
`

const Input = styled.input`
//display: none;
`
