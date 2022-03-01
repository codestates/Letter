import styled from "styled-components";
import FemaleLogo from "../images/defaultImage-f.png";
import { Eprops } from "../pages/mypage";

const ModalContainer = styled.div`
  height: 15rem;
  text-align: center;
  margin: 120px auto;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

const ModalView = styled.div.attrs(() => {
  "dialog";
})`
  border: 2px solid #ab8643;
  border-radius: 10px;
  background-color: #ffffff;
  width: 497px;
  height: 488px;
`;

const ProfileImgContainer = styled.div`
  border: 1px solid black;
  width: 230px;
  height: 300px;
  margin-left: 30px;
`;

const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 40px;
`;

const EditProfileBtn = styled.button`
  height: 32px;
  width: 122px;
  font-size: 14px;
  cursor: pointer;
  background-color: #ab8643;
  color: rgb(252, 251, 251);
  line-height: 1px;
  border: 1px solid #ab8643;
  border-radius: 5px;
  border-style: none;
  margin-top: 20px;
  &:hover {
    background-color: #fffcfb;
    color: #ab8643;
    border: 1px solid #ab8643;
  }
`;

const ProfileContentContainer = styled.div`
  border: 1px solid black;
  width: 230px;
  height: 300px;
`;

const CloseBtn = styled.span`
  width: 40px;
  height: 40px;
  font-size: 40px;
  font-weight: lighter;
  color: #9b9b9b;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 85%;
  margin-top: 2%;
  vertical-align: center;
  outline: 0;
`;

function EditProfileModal(
  isOpen1: Eprops["isOpen1"],
  setIsOpen1: Eprops["setIsOpen1"]
): JSX.Element {
  return (
    <ModalContainer>
      <ModalBackdrop>
        <ModalView onClick={(e: any) => e.stopPropagation()}>
          <ProfileImgContainer>
            <ProfileImg src={FemaleLogo} />
            <EditProfileBtn>사진 편집</EditProfileBtn>
          </ProfileImgContainer>
          <ProfileContentContainer>
            <CloseBtn>×</CloseBtn>
          </ProfileContentContainer>
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  );
}

export default EditProfileModal;
