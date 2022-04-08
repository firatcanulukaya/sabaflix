import styled from "styled-components";
import {colors} from "../../assets/style/styled";

export const ModalInnerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  transition: all .3s ease-in-out;

  &.active {
    visibility: visible;
    opacity: 1;
  }
`;

export const ModalClose = styled.img`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 32px;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${colors.secondaryAltColor};
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ModalTop = styled.div`
  width: 100%;
  height: 200px;
`;

export const ModalImgTop = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 5px 5px 0 0;
`;

export const ModalInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 1rem;
`;

export const ModalTitleLogo = styled.img`
  margin-top: 1rem;
  width: 280px;
`;

export const ModalDesc = styled.p`
  font-size: 1.2rem;
  font-family: "Netflix Sans", sans-serif;
  color: ${colors.white};
`;

export const ModalCategories = styled.span`
  font-size: 1rem;
  font-family: "Netflix Sans", sans-serif;
  color: ${colors.whiteOpacity};
  cursor: pointer;
  transition: color .3s ease-in-out;

  &:hover {
    color: ${colors.white};
  }
`;