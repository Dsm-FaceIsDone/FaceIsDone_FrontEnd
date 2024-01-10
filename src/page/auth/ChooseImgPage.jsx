import styled from "styled-components";

function ChooseImgPage() {
  return (
    <Wrapper>
        <BackImg />
      <ChooseImgWrapper>
        <Text>프로필 이미지를 설정해주세요.</Text>
        <ProfileImg/>
        <BasicProfile></BasicProfile>
        <NewProfile></NewProfile>
      </ChooseImgWrapper>
    </Wrapper>
  );
}

export default ChooseImgPage;
