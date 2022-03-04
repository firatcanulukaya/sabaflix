import styled from "styled-components";
import {colors} from "../../assets/style/styled";

export const LastContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2rem;
`

export const LastHeader = styled.h1`
  color: ${colors.white};
  font-family: "Netflix Sans", sans-serif;
  font-size: 2rem;
  margin-bottom: 50px;
`

export const LastContent = styled.div`
  width: 100%;
  max-width: 25%;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
  
  @media (min-width: 768px) {
    max-width: 100%;
  }
  
  @media (min-width: 992px) {
    max-width: 50%;
  }
  
  @media (min-width: 1200px) {
    max-width: 25%;
  }
  
`

export const LastImg = styled.img`
  width: 80%;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    max-width: 50%;
  }

  @media (min-width: 768px) {
    max-width: 60%;
  }

  @media (min-width: 992px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 80%;
  }
`