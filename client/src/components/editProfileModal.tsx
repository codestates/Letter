import styled from "styled-components";
import FemaleLogo from "../images/defaultImage-f.png";

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
  display: flex;
  flex-direction: column;
  align-items: center;
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

function EditProfileModal(): JSX.Element {
  return (
    <ModalContainer>
      <ModalBackdrop>
        <ModalView onClick={(e: any) => e.stopPropagation()}>
          <CloseBtn>×</CloseBtn>
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  );
}

export default EditProfileModal;
