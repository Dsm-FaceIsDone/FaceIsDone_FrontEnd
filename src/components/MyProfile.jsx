import styled from "styled-components";
import { Profile } from "../assets";

const MyProfile = () => {
  return (
    <Right>
      <MyPro>
        <ProfileImg src={Profile} alt="프로필" />
        <Name>모시깽이</Name>
        <Id>hyunmin_jo</Id>
      </MyPro>
    </Right>
  );
};

const Right = styled.div`
  width: 550px;
  height: 923px;
  padding-top: 115px;
`;

const MyPro = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ProfileImg = styled.img`
  width: 55px;
  height: 55px;
`;

const Name = styled.p`
  font-size: 25px;
  font-weight: 400;
  color: black;
`;

const Id = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: black;
`;

export default MyProfile;
