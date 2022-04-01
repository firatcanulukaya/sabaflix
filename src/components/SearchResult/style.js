import styled from "styled-components";
import {colors} from "../../assets/style/styled";

export const SearchContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 10rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const SearchContent = styled.div`
  width: 100%;
  max-width: 25%;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 50%;
  }

  @media (min-width: 768px) {
    max-width: 33%;
  }

  @media (min-width: 992px) {
    max-width: 25%;
  }

  @media (min-width: 1200px) {
    max-width: 20%;
  }
`;

export const SearchContentContainer = styled.div`
  width: 200px;
  height: 300px;
  position: relative;
  transition: all 0.3s ease-in-out;
  
  &:hover{
    transform: scale(1.3);
  }
`
export const SearchImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
  opacity: 0.8;
`
export const SearchInformation = styled.div`
  background: ${colors.black};
  opacity: 0.9;
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  color: ${colors.white};
  font-family: "Netflix Sans", sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
  position: absolute;
  bottom: 0;
  left: 0;

  @media (max-width: 768px) {
    height: 30px;
  }

  @media (min-width: 768px) {
    height: 40px;
  }

  @media (min-width: 992px) {
    height: 50px;
  }

  @media (min-width: 1200px) {
    height: 60px;
  }
`

export const SearchInfoLogo = styled.img`
  width: 40%;
`

export const SearchInfoPrice = styled.p`
  color: ${colors.white};
  font-size: 1rem
`